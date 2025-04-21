import css from './PhotosGalleryItem.module.css';


const PhotosGalleryItem = ({ src, alt }) => {
  return (
    <div className={css.cardItem}>
      <img src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;

