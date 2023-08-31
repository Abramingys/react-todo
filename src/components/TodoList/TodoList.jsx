import React from 'react'

import { useTodoContext } from '../../provider/TodoProvider';
import { useInfoContext } from '../../provider/InfoProvider';
import Todoitem from "../TodoItem/TodoItem";
import styles from './TodoList.module.scss';


function TodoList() {
    const { todos } = useTodoContext();
    const { searchValue, isCompleted } = useInfoContext();


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