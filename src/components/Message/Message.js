import React from 'react';
import styles from './message.module.css';

export function Message({ message }) {
    return (
        <div className={styles.messageContent + ' ' + styles.ownMessage}>
            <span>as;kdakl;sda</span>
            <div className={styles.messageTriangle}></div>
        </div>
    );
}
