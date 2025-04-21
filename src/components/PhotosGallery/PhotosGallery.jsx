import  Grid  from '../Grid/Grid';
import  GridItem  from '../GridItem/GridItem';
import css from "./PhotosGallery.module.css";
import { useEffect, useState } from 'react';
import { fetchGetPhotos } from '../../apiService/photos';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';



const PhotosGallery = ({ query }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchGetPhotos(query, page);

        setImages(prev => {
          if (page === 1) {
            return data.photos;
          }
          return [...prev, ...data.photos];
        });
      } catch (error) {
        console.error('Error: за цим пошуком фото не знайдено', error);
      }
    };
    getData();
  }, [page, query]);

  return (
    <div className={css.photosGallery}>
      <Grid>
        {images.map(image => (
          <GridItem key={image.id}>
            <PhotosGalleryItem
              src={image.src}
              alt={image.alt}
              avg_color={image.avg_color}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
  
export default PhotosGallery;
