import React from 'react';
import styles from './message.module.css';

export function Message({ message }) {
    const demoUserId = 111;

    const isUser = demoUserId === message.userId;

    const ownMessage = isUser ? styles.ownMessage : '';

    const messageSentAt = new Date(message.sentAt);
    const formattedSentAt = `${messageSentAt.getHours().toString().padStart(2, 0)}:${messageSentAt.getMinutes().toString().padStart(2, 0)}`;

    return (
        <div className={styles.messageContent + ' ' + ownMessage}>
            <span>{message.text}</span>
            <div className={styles.messageTriangle}></div>
            <div className={styles.sentAt}>{formattedSentAt}</div>
        </div>
    );
}
