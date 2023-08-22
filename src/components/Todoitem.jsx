import React from 'react'
import { InputContext } from "../App";


function Todoitem({ todo }) {

    const { toogleComplete, removeTask, todos, setTodos } = React.useContext(InputContext);
    const [input, setInput] = React.useState(todo.task);

    function changeTodoTaks(e, id) {
        setInput(e.target.value)
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task: input } : todo));

    }



    return (
        <li className={todo.completed ? "todo-list__item todo-list__item_red" : "todo-list__item "}>
            <input className="todo-list__checkbox" type="checkbox" onClick={() => toogleComplete(todo.id)} />
            <input className={todo.completed ? "input todo-list__input todo-list__input_crossed" : "input todo-list__input"} type="text" placeholder="Todo text ..." value={input} onChange={(e, id) => changeTodoTaks(e, todo.id)} />
            <button className="button" onClick={() => removeTask(todo.id)}>X</button>
        </li>
    )
};

export default Todoitem;

