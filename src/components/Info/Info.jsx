import React from 'react'
import { InputContext } from '../../App';
import styles from './Info.module.scss';
import Button from '../Button/Button';

function Info() {
    const { todos, showCompleted, showAll, searchValue, setSearchValue } = React.useContext(InputContext);

    return (
        <div className={styles.info}>
            <p>All:
                <span>{todos.length}</span>
            </p>
            <p>Completed:
                <span>{todos.filter(({ completed }) => completed).length}</span>
            </p>
            <Button func={showAll} text="Show All" />
            <Button func={showCompleted} text="Show Completed" />
            <input className="input header__input-text" type="text" placeholder="search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}

export default Info;

