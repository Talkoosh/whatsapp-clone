import React, { useEffect, useState } from 'react';
import styles from './chat.module.css';
import demoData from '../../data/fake.json';
import { Message } from '../Message/Message';

export function Chat() {
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        setMessages(demoData.messages);
    }, []);

    return (
        <section className={styles.container}>
            {messages?.map((message) => (
                <Message message={message} />
            ))}
        </section>
    );
}
