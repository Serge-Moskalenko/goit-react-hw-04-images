import { ImgStyled, LiStyled } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({id,path, name,}) => (
    <LiStyled id={id}>
        <ImgStyled src={path} alt={name} />
    </LiStyled>
);