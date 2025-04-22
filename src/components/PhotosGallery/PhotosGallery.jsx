import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import css from './PhotosGallery.module.css';
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

    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, 1);
        setImages(data.photos);
        setPage(1);
      } catch (error) {
        console.error('Error: за цим пошуком фото не знайдено', error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

useEffect(() => {
  if (page === 1 || !query) return;

  const getMoreData = async () => {
    setIsLoading(true);
    try {
      const data = await getPhotos(query, page);
      setImages(prev => [...prev, ...data.photos]);
    } catch (error) {
      console.error('Error при підвантаженні ще фото', error);
    } finally {
      setIsLoading(false);
    }
  };

  getMoreData();
}, [page, query]);

  return (
    <div className={css.photosGallery}>
      <Grid>
        {images.map(photo => (
          <GridItem key={photo.id}>
            <PhotosGalleryItem photo={photo} />
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
