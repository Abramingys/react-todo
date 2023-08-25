import React from 'react'
import { InputContext } from "../../App";
import styles from './TodoItem.module.scss';
import Button from '../Button/Button';


function Todoitem({ todo }) {
    console.log(Array.from(Object.values(styles)).join(' '));

    const { toogleComplete, removeTask, todos, setTodos } = React.useContext(InputContext);
    const [input, setInput] = React.useState(todo.task);

    function changeTodoTaks(e, id) {
        setInput(e.target.value)
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: input } : todo));
    };


    return (
        <li className={!todo.completed ? styles.todoitem : (styles.todoitem + ' ' + styles.todoitemred)}>
            <input type="checkbox" onClick={() => toogleComplete(todo.id)} />
            <input className={todo.completed ? "input todo-list__input todo-list__input_crossed" : "input todo-list__input"} type="text" placeholder="Todo text ..." value={input} onChange={(e, id) => changeTodoTaks(e, todo.id)} />
            <Button func={() => removeTask(todo.id)} text='X' />
        </li >
    )
};

export default Todoitem;

