import React, { useEffect, useRef, useState } from 'react';
import styles from './sendMessage.module.css';

export function SendMessage() {
    const containerRef = useRef();
    const [rows, setRows] = useState([]);
    const [currRowIndex, setCurrRowIndex] = useState(null);

    useEffect(() => {
        document.querySelector(`[data-index="${currRowIndex}"]`)?.focus();
    }, [currRowIndex]);

    function setCurrentInput(ev) {
        const currIndex = Number(ev.target.dataset.index);
        setCurrRowIndex(currIndex);
    }

    function handleKeyPress(ev) {
        //on UP/DOWN press
        if (ev.keyCode === 38) {
            setCurrRowIndex((prevState) => prevState + 1);
        }
        if (ev.keyCode === 40) {
            setCurrRowIndex((prevState) => prevState - 1);
        }
        //On ENTER press
        if (ev.keyCode === 13) {
            ev.preventDefault();
            if (ev.shiftKey) {
                setRows((prevState) => [<input onClick={setCurrentInput} onKeyDown={handleKeyPress} className={styles.messageRow} data-index={prevState.length} />, ...prevState]);
            }
        }
        //On DELETE press
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
