import css from './PhotosGalleryItem.module.css';


const PhotosGalleryItem = ({ photo }) => {
  
  return (
    <div className={css.cardItem}>
      <img id={photo.id} src={photo.src.large} alt={photo.alt} />
    </div>
  );
};
export default PhotosGalleryItem;

