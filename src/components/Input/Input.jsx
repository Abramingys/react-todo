import React from 'react';
import styles from './Input.module.scss';


function Input({ placeholder, inputValue, onChange, crossed }) {

    return (
        <input className={styles.input + ' ' + styles[crossed]} type="text" placeholder={placeholder} value={inputValue} onChange={onChange} />
    )
};

export default Input;