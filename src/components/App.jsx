import {useState,useEffect} from "react";
import { AppStyled } from "./App.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import {  ApiServise } from "./ApiServise";
import { Audio } from 'react-loader-spinner';
import { ButtonComponent } from "./Button/Button";
import { Error } from "./Error/Error";
import { Modals } from "./Modal/Modal";

const apiServise = new ApiServise();

export function App() {
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [moduleImage, setModalImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    async function onRequest() {
      if (request)
        try {
          setLoading(true);
          setError(false);
          setIsAll(false);
          const newImages = await apiServise.fetch(request, page);

          if (newImages[0].length < 1) setIsAll(true);

          setImages(s => [...s, ...newImages[0]]);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
    }

    onRequest();
  }, [request, page]);

  const queryParameter = q => {
     
    if (request !== q) {
      setRequest(q);
      setPage(1);
      setImages([]);
    }
  };

  const onModal = e => {
    console.log(e.target)

    const largeImg = images.filter(item => item.id === Number(e.target.closest('li').id));
    setModalImg(largeImg[0].largeImageURL);
  };

  return (<>
    
    <AppStyled>
      <Searchbar query={queryParameter} />
      {moduleImage && (<Modals img={moduleImage} closeModal={() => { setModalImg(null) }}> {<img src={moduleImage} alt='' />} </Modals>)}

      {loading && <Audio />}
      {error  && <Error message='Error' />}
      {isAll && <Error message="The End!" />}
        
      {images.length > 0 && (
        <ImageGallery data={images} onClick={onModal} />
      )}
      {images.length > 0 && !loading && !error && !isAll && <ButtonComponent click={() => { setPage(s => s + 1) }} />}
        
    </AppStyled>
      
  </>);
};