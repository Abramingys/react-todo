import React from 'react'
import { InputContext } from '../App';

function Info() {
    const { todos, showCompleted, showAll, searchValue, setSearchValue } = React.useContext(InputContext);

    return (
        <div className="info">
            <p>All:
                <span>{todos.length}</span>
            </p>
            <p>Completed:
                <span>{todos.filter(({ completed }) => completed).length}</span>
            </p>
            <button className="button" onClick={showAll}>Show All</button>
            <button className="button" onClick={showCompleted}>Show Completed</button>
            <input className="input header__input-text" type="text" placeholder="search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}

export default Info;

