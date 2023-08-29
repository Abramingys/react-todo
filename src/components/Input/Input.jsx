import React from 'react';
import styles from './Input.module.scss';


function Input({ placeholder, inputValue, func, crossed }) {
    return (
        <input className={styles.input + ' ' + styles[crossed]} type="text" placeholder={placeholder} value={inputValue} onChange={func} />
    )

}

export default Input;