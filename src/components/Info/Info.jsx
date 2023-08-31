import React from 'react'

import styles from './Info.module.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useTodoContext } from '../../provider/TodoProvider';
import { useInfoContext } from '../../provider/InfoProvider';

function Info() {

    const { todos } = useTodoContext();
    const { setSearchValue, searchValue, setIsCompleted } = useInfoContext();


    const showCompleted = () => {
        setIsCompleted(true);
    };

    const showAll = () => {
        setIsCompleted(false);
    };


    return (
        <div className={styles.info}>
            <p>All:
                <span>{todos.length}</span>
            </p>
            <p>Completed:
                <span>{todos.filter(({ completed }) => completed).length}</span>
            </p>
            <Button handleClick={showAll} text="Show All" />
            <Button handleClick={showCompleted} text="Show Completed" />
            <Input placeholder="search..." inputValue={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}

export default Info;

