import React, { useRef, useState } from 'react';
import styles from './sendMessage.module.css';

export function SendMessage() {
    const containerRef = useRef();
    const [rows, setRows] = useState([]);

    function handleKeyPress(ev) {
        if (ev.keyCode === 13) {
            ev.preventDefault();
            if (ev.shiftKey) {
                setRows((prevState) => [<input onKeyDown={handleKeyPress} className={styles.messageRow} data-index={prevState.length} />, ...prevState]);
            }
        }
        if (ev.keyCode === 8) {
            const index = ev.target.dataset.index;
        }
    }

    const containerHeight = 55 + rows.length * rows[0]?.height;
    return (
        <section style={{ height: containerHeight + 'px' }} ref={containerRef} className={styles.container}>
            <div className={styles.messageTextContainer}>
                {rows}
                <input className={styles.messageRow} onKeyDown={handleKeyPress} />
            </div>
        </section>
    );
}
