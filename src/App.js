import React from 'react'

import './scss/allStyles.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import TodoList from './components/TodoList/TodoList';
import TodoProvider from './provider/TodoProvider';
import InfoProvider from './provider/InfoProvider';




function App() {

  return (
    <>
      <TodoProvider>
        <Header />
        <InfoProvider>
          <Info />
          <TodoList />
        </InfoProvider>
      </TodoProvider>
    </>

  );
}

export default App;

