import React from 'react';
import styles from './Button.module.scss'

function Button({ text, handleClick }) {

    return (
        <button onClick={handleClick} className={styles.button}>{text}</button>
    );
}

export default Button;