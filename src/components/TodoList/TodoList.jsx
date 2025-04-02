import TodoListItem from '../TodoListItem/TodoListItem';
import style from './TodoList.module.css';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';


const TodoList = ({ items, onDelete }) => {
  return (
    <Grid>
      <div className={style.listBox}>
        {items.map((todo, index) => (
          <GridItem key={todo.id}>
            <TodoListItem
              todo={todo}
              index={index}
              onDelete={onDelete}
            />
          </GridItem>
        ))}
      </div>
    </Grid>
  );
};

export default TodoList;
