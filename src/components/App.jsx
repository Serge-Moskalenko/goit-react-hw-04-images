import React,{Component} from "react";
import { AppStyled } from "./App.styled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import {  ApiServise } from "./ApiServise";
import { Audio } from 'react-loader-spinner';
import { ButtonComponent } from "./Button/Button";
import { Error } from "./Error/Error";
import { Modal } from "./Modal/Modal";



const apiServise = new ApiServise();

export class App extends Component {

  state = {
    images: [],
    moduleImage:null,
    request:'',
    loading: false,
    page: 1,
    error:false
  }


  async componentDidUpdate(_, prevStat) {
    const { request, page } = this.state;
    
    if (prevStat.request !== request || prevStat.page !== page) {
      try {

        this.setState({ loading: true, error: false, isAll: false });
        const newImages = await apiServise.fetch(this.state.request, page);
   

        this.setState(prevState => {
          return {
            images: prevState.images.concat(newImages[0]),
          };
        });
      } catch (error) {
        this.setState({ error});
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  hendlerClick = () => {
  
    this.setState(prevState => {
    
    return { page: prevState.page + 1 }
   });
    
  }

  queryParameter = q => {
    this.setState(({request}) => {
      if (request !== q)
        return { request: q, page: 1, images: [] };
    });
  }

  onModal = e => {

    const largeImg = this.state.images.filter(
      item => item.id === Number(e.target.closest('li').id)
    );

    this.setState({
      moduleImage: largeImg[0].largeImageURL,
    });

  }

  closeModal = () => {
    this.setState({ moduleImage: null });
  };

  render() {
    const { images, loading, error ,moduleImage} = this.state;

    return (<>
      
      <AppStyled>
        <Searchbar query={this.queryParameter} />
        {moduleImage && (<Modal img={moduleImage} closeModal={this.closeModal}> {<img src={moduleImage} alt=''/>} </Modal>)}

        {loading && <Audio />}
        {error && <Error message={ error.message} />}
        
        {images.length > 0 && (
          <ImageGallery data={images} onClick={this.onModal} />
        )}
        {images.length > 0 && <ButtonComponent click={ this.hendlerClick} />}
        
      </AppStyled>
      
      </>
  );
  }
  
};
