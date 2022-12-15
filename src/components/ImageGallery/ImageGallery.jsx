import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryStyled } from "./ImageGallery.styled";

export const ImageGallery = ({ data, onClick }) => {
    console.log(data)

    return(<ImageGalleryStyled onClick={onClick}>{data.map(i =>
        <ImageGalleryItem
            key={i.id}
            id={i.id}
            path={i.webformatURL}
            name={i.tags}
        />)
    }</ImageGalleryStyled >)

    
};