import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { useState } from 'react';


const Photos = ({ onClick }) => {
  const [query, setQuery] = useState('');

  const getQuery = inputValue => {
    setQuery(inputValue);
  };

  return (
    <>
      <Form onSubmit={getQuery} />
      <PhotosGallery query={query} />
      
    </>
  );
};

export default Photos;
