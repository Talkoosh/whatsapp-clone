import React from 'react';
import styles from './chatHeader.module.css';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';

export function ChatHeader({ chat }) {
    return (
        <section className={styles.container}>
            <div className={styles.chatImg}>
                <ProfilePicture src={chat.imgSrc} />
            </div>
            {/* <img className={styles.chatImg} src={chat.imgSrc} /> */}
            <div className={styles.chatDetailsContainer}>
                <span className={styles.chatName}>{chat.name}</span>
                <span></span>
            </div>
            <div className={styles.iconsContainer}>
                <span className={styles.icon}>
                    <FaMagnifyingGlass />
                </span>
                <span className={styles.icon}>
                    <BsThreeDotsVertical />
                </span>
            </div>
        </section>
    );
}
