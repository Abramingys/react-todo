import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import { InputContext } from '../../App';



function Header() {

    const { headerInput, setHeaderInput, addTodo, removeAll, removeLast } = React.useContext(InputContext);

    return (
        <header className={styles.header}>
            <Button func={removeAll} text="Dellete All" />
            <Button func={removeLast} text='Dellete Last' />
            <input className="input header__input-text" type="text" placeholder="Enter Add..." onChange={(e) => setHeaderInput(e.target.value)} value={headerInput} />
            <Button func={addTodo} text='Add' />
        </header >
    )
};

export default Header;