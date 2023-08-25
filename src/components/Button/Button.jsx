import React from 'react';
import styles from './Button.module.scss'

function Button({ text, func }) {

    return (
        <button onClick={func} className={styles.button}>{text}</button>
    );
}

export default Button;