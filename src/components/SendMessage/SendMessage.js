import React, { useEffect, useRef, useState } from 'react';
import styles from './sendMessage.module.css';
import { FaRegLaughBeam } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { BiSolidMicrophone } from 'react-icons/bi';
import { RiSendPlane2Fill } from 'react-icons/ri';

export function SendMessage({ createMessage }) {
    const [message, setMessage] = useState('');

    const handleInput = (ev) => {
        const val = ev.target.value;
        setMessage(val);
    };

    const onSendMessage = async () => {
        await createMessage(message);
        setMessage('');
    };

    return (
        <section className={styles.container}>
            <FaRegLaughBeam className={styles.icon} />
            <FiPlus className={styles.icon} />
            <input onChange={handleInput} value={message} placeholder="Type a message" className={styles.messageInput} />
            {message ? <RiSendPlane2Fill className={styles.icon} onClick={onSendMessage} /> : <BiSolidMicrophone className={styles.icon} />}
        </section>
    );
}
