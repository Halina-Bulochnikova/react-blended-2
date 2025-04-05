import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ todo, index, onDelete }) => {
  return (
    <div className={style.box}>
      <div>
        <Text>TODO #{index + 1}</Text>
        <Text>{todo.text}</Text>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={style.editButton}
        type="button"
        onClick={() => handleEditTodo(todo)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
