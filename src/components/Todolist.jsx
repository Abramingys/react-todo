import React from 'react'
import { InputContext } from "../App";
import Todoitem from "./Todoitem";

function Todolist() {

    const { todos, isCompleted, searchValue } = React.useContext(InputContext);


    return (
        <ul className="todo-list">
            {(searchValue && todos.filter((elem) => elem.task.search(searchValue) != -1).map((todo) => {
                return (
                    <Todoitem todo={todo} key={todo.id} />
                )
            })) || todos.filter(({ completed }) => isCompleted ? completed : true).map((todo) => {
                return (
                    <Todoitem todo={todo} key={todo.id} />
                )
            })
            }
        </ul>
    )

}

export default Todolist;