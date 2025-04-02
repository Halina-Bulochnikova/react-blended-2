import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import TodoList from '../../src/components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [currentTodo, setCurrentTodo] = useState(null);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    const newTodo = { id: nanoid(), text: inputValue };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const handleEditTodo = todo => {
    setCurrentTodo(todo);
  };
   const cancelUpdate = () => {
     setCurrentTodo(null);
  };
  const updateTodo = text => {
    if (findTodo(text)) {
      alert('Todo already exists!');
      return;
    }
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text } : todo
      )
    );
    setCurrentTodo(null);
  };
  const findTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };


  return (
    <>
      {currentTodo ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      <TodoList items={todos} onDelete={deleteTodo} onEdit={handleEditTodo} />
    </>
  );
};

export default Todos;
