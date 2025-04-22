import css from './PhotosGalleryItem.module.css';


const PhotosGalleryItem = ({ id, src, alt, }) => {
  return (
    <div className={css.cardItem}>
      <img id={id} src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;

