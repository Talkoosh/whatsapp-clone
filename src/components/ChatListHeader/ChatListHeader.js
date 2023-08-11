import React from 'react';
import styles from './chatListHeader.module.css';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';

export function ChatListHeader({}) {
    return (
        <section className={styles.container}>
            <div className={styles.navBar}>
                <ProfilePicture></ProfilePicture>
            </div>
            <div className={styles.searchBar}></div>
        </section>
    );
}
