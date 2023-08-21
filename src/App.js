import React from 'react'

import './scss/allStyles.scss';
import Header from './components/Header';
import Info from './components/Info';
import Todolist from './components/Todolist';


export const InputContext = React.createContext();


function App() {
  const [headerInput, setHeaderInput] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');


  const addTodo = () => {
    setTodos([...todos, { id: Math.random().toString(36), task: headerInput, completed: false }]);
    setHeaderInput('');

  };

  const removeAll = () => {
    setTodos([])
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const removeLast = () => {
    setTodos(todos.filter((elem) => elem != todos.at(-1)));
  };

  const toogleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const showCompleted = () => {
    setIsCompleted(true);
  };

  const showAll = () => {
    setIsCompleted(false);
  };


  return (
    <>
      <InputContext.Provider value={{ headerInput, setHeaderInput, addTodo, todos, removeAll, removeLast, toogleComplete, removeTask, setTodos, showCompleted, showAll, isCompleted, searchValue, setSearchValue }}>
        <Header />
        <Info />
        <Todolist />
      </InputContext.Provider>
    </>

  );
}

export default App;
