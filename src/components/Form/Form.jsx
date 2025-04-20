import { FiSearch } from 'react-icons/fi';
import css from './Form.module.css';


const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
event.preventDefault();
const inputValue = event.target.elements.search.value.trim();
    if (inputValue) {
      onSubmit(inputValue);
      event.target.reset();
    }
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={css.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;

