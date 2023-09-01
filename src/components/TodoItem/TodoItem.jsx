import React from 'react';
import styles from './TodoItem.module.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useTodoContext } from '../../provider/TodoProvider';


function Todoitem({ todo }) {

    const { todos, setTodos } = useTodoContext();
    const [input, setInput] = React.useState(todo.task);

    const toogleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const removeTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    function changeTodoTaks(e, id) {
        setInput(e.target.value);
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: input } : todo));
    };

    return (
        <li className={styles.todoitem + ' ' + (todo.completed ? styles.todoitemred : '')}>
            <input type="checkbox" onClick={() => toogleComplete(todo.id)} />
            <Input crossed={todo.completed ? 'inputcrossed' : ''} placeholder="Todo text ..." inputValue={input} onChange={(e) => changeTodoTaks(e, todo.id)} />
            <Button handleClick={() => removeTask(todo.id)} text='X' />
        </li >
    )
};

export default Todoitem;

