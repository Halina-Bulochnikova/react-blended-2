import Form from '../components/Form/Form';

const Photos = () => {

  const getQuery = inputValue => {
    console.log(inputValue);
  };

  return (
    <>
      <Form onSubmit={getQuery} />
    </>
  );
};

export default Photos;
