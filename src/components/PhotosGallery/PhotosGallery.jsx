import  Grid  from '../Grid/Grid';
import  GridItem  from '../GridItem/GridItem';
import css from "./PhotosGallery.module.css";
import { useEffect, useState } from 'react';
import { getPhotos } from '../../apiService/photos';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';



const PhotosGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setPage(1);

    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, page);

        setImages(prev => {
          if (page === 1) {
            return data.photos;
          }
          return [...prev, ...data.photos];
        });
      } catch (error) {
        console.error('Error: за цим пошуком фото не знайдено', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  return (
    <div className={css.photosGallery}>
      <Grid>
        {images.map(photo => (
          <GridItem key={photo.id}>
            <PhotosGalleryItem
              id={photo.id}
              src={photo.src}
              alt={photo.alt}
            />
          </GridItem>
        ))}
      </Grid>

      {isLoading && <Loader />}
      {isLoading && (
        <p className={css.loading}>Підвантажую ваш запит картинок...</p>
      )}
      {images.length > 0 && !isLoading && (
        <Button onClick={() => setPage(prev => prev + 1)} />
      )}
    </div>
  );
};
  
export default PhotosGallery;
