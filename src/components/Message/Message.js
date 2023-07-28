import React from 'react';
import styles from './message.module.css';

export function Message({ message }) {
    const demoUserId = 111;

    const isUser = demoUserId === message.userId;

    const ownMessage = isUser ? styles.ownMessage : '';

    return (
        <div className={styles.messageContent + ' ' + ownMessage}>
            <span>{message.text}</span>
            <div className={styles.messageTriangle}></div>
        </div>
    );
}
