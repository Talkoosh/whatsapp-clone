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
                    <div className={styles.preview}>
                        <img src={chat.imgSrc} />
                        <div className={styles.previewText}>
                            <h3 className={styles.chatName}>{chat.name}</h3>
                            <span className={styles.lastMessageContainer}>
                                <BsCheckAll color="grey" />
                                <h5 className={styles.lastMessageText}>{chat.lastMessage?.text}</h5>
                            </span>
                        </div>
                    </div>
                    <div className={styles.hourAndArrowContainer}>
                        <p className={styles.sentAt}>{sentAt}</p>
                        <AiOutlineDown color="grey" className={styles.downArrow} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
}
