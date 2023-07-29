import React, { useRef, useState } from 'react';
import styles from './sendMessage.module.css';

export function SendMessage() {
    const textAreaRef = useRef();
    const [rows, setRows] = useState([]);

    const handleKeyPress = (ev) => {
        if (ev.keyCode === 13) {
            ev.preventDefault();
            if (ev.shiftKey) {
                setRows((prevState) => [<input className={styles.messageRow}></input>, ...prevState]);
            }
        }
    };
    return (
        <section className={styles.container}>
            <div ref={textAreaRef} onKeyDown={handleKeyPress} contentEditable className={styles.messageText}>
                {rows}
            </div>
        </section>
    );
}
