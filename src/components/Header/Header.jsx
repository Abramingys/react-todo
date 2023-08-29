import React from 'react';
import styles from './Header.module.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { InputContext } from '../../App';



function Header() {

    const { headerInput, setHeaderInput, addTodo, removeAll, removeLast } = React.useContext(InputContext);

    return (
        <header className={styles.header}>
            <Button func={removeAll} text="Dellete All" />
            <Button func={removeLast} text="Dellete Last" />
            <Input func={(e) => setHeaderInput(e.target.value)} placeholder="Enter Add..." inputValue={headerInput} />
            <Button func={addTodo} text='Add' />
        </header >
    )
};

export default Header;