import React, { useContext } from 'react';

const TodoContext = React.createContext();

const TodoProvider = ({ children }) => {

    const [todos, setTodos] = React.useState([]);

    const contextValue = {
        todos,
        setTodos,
    };

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;