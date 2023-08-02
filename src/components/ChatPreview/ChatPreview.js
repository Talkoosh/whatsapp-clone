import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import styles from './chatPreview.module.css';

export function ChatPreview({ chat }) {
    let { sentAt } = { ...chat.lastMessage };
    sentAt = new Date(sentAt);
    sentAt = String(sentAt.getHours()).padStart(2, 0) + ':' + String(sentAt.getMinutes()).padStart(2, 0);

    return (
        <>
            {chat ? (
                <div className={styles.container}>
                    <div className={styles.chatImg}>
                        <img src={chat.imgSrc} />
                    </div>
                    <div className={styles.textPreview}>
                        <span className={styles.firstRow}>
                            <h3 className={styles.chatName}>{chat.name}</h3>
                            <span className={styles.sentAt}>{sentAt}</span>
                        </span>
                        <span className={styles.secondRow}>
                            <span className={styles.lastMessage}>
                                <BsCheckAll className={styles.checkIcon} color="grey" />
                                <span className={styles.lastMessageText}>{chat.lastMessage?.text}</span>
                            </span>
                            <AiOutlineDown color="grey" className={styles.downArrow} />
                        </span>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
