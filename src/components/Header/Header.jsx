import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useTodoContext } from '../../provider/TodoProvider';



function Header() {
    const { todos, setTodos } = useTodoContext();
    const [headerInput, setHeaderInput] = React.useState('');

    const addTodo = () => {
        if (!headerInput) {
            return
        }
        setTodos([...todos, { id: Math.random().toString(36), task: headerInput, completed: false }]);
        setHeaderInput('');
    };

    const removeAll = () => {
        setTodos([])
    };

    const removeLast = () => {
        setTodos(todos.filter((elem) => elem != todos.at(-1)));
    };


    return (
        <header className={styles.header}>
            <Button handleClick={removeAll} text="Dellete All" />
            <Button handleClick={removeLast} text="Dellete Last" />
            <Input onChange={(e) => setHeaderInput(e.target.value)} placeholder="Enter Add..." inputValue={headerInput} />
            <Button handleClick={addTodo} text='Add' />
        </header >
    )
};

export default Header;