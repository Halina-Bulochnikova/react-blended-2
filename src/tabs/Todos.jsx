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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = inputValue => {
    if (findTodo(inputValue)) {
      alert('Such a to-do already exists!');
      return;
    }
    const newTodo = { id: nanoid(), text: inputValue };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = todo => {
    if (!todo || !todo.id) {
      console.warn('The editing tool does not have an identifier');
      return;
    }
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const cancelUpdate = () => {
    setCurrentTodo(null);
    setIsEditing(false);
  };

  const updateTodo = text => {
    if (!currentTodo || !currentTodo.id) {
      alert('No todo selected for editing');
      return;
    }

    if (findTodo(text)) {
      alert('Such a to-do already exists!');
      return;
    }

    const updatedTodos = todos.map(todo =>
      todo.id === currentTodo.id ? { ...todo, text } : todo
    );

    setTodos(updatedTodos);
    setCurrentTodo(null);
    setIsEditing(false);
  };

  const findTodo = text => {
    return todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
  };

  return (
    <>
      {isEditing ? (
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
