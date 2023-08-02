import React, { useEffect, useState } from 'react';
import styles from './chat.module.css';
import demoData from '../../data/fake.json';
import { Message } from '../Message/Message';
import { SendMessage } from '../SendMessage/SendMessage';

export function Chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(demoData.messages);
    }, []);

    const createMessage = async (message) => {
        setMessages((prevState) => [
            ...prevState,
            {
                chatId: 123123,
                userId: 111,
                type: 0,
                text: message,
                sentAt: 1690558179166,
                read: [],
            },
        ]);
        return;
    };

    return (
        <section className={styles.container}>
            {messages?.map((message, index) => (
                <Message isNewMessageChain={messages[index - 1]?.userId !== messages[index]?.userId} key={message.id} message={message} />
            ))}
            <SendMessage createMessage={createMessage} />
        </section>
    );
}
