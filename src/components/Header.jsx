import React from 'react'
import { InputContext } from '../App';

function Header() {

    const { headerInput, setHeaderInput, addTodo, removeAll, removeLast } = React.useContext(InputContext);

    return (
        <header className="header">
            <button className="button" onClick={removeAll} >Dellete All</button>
            <button className="button" onClick={removeLast}>Dellete Last</button>
            <input className="input header__input-text" type="text" placeholder="Enter Add..." onChange={(e) => setHeaderInput(e.target.value)} value={headerInput} />
            <button className="button" onClick={addTodo} >Add</button>
        </header >
    )
};

export default Header;