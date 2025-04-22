import css from './PhotosGalleryItem.module.css';


const PhotosGalleryItem = ({ photo }) => {
  
  return (
    <div className={css.cardItem}>
      <img src={photo.src.large} alt={photo.alt || 'Image'} />
    </div>
  );
};
export default PhotosGalleryItem;

