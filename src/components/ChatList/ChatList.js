import React, { useEffect, useState } from 'react';
import styles from './chatList.module.css';
import { ChatListHeader } from '../ChatListHeader/ChatListHeader';
import { ChatPreview } from '../ChatPreview/ChatPreview';
import demoData from '../../data/fake.json';

export function ChatList() {
    const [chats, setChats] = useState(null);

    useEffect(() => {
        setChats(demoData.chats);
    }, []);

    return (
        <section className={styles.container}>
            <ChatListHeader></ChatListHeader>
            {chats?.map((chat) => (
                <ChatPreview key={chat.id} chat={chat} />
            ))}
        </section>
    );
}
