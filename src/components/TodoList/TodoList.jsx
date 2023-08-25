import React from 'react'
import { InputContext } from "../../App";
import Todoitem from "../TodoItem/TodoItem";
import styles from './TodoList.module.scss';
import '../../scss/variables.scss';

function TodoList() {

    const { todos, isCompleted, searchValue } = React.useContext(InputContext);


    return (
        <ul className={styles.todolist}>
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

export default TodoList;