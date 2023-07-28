import React from 'react'
import { ChatList } from '../../components/ChatList/ChatList'
import { Chat } from '../../components/Chat/Chat'
import styles from './homePage.module.css'

export function HomePage() {
  return (
    <main className={styles.container}>
        <section className={styles.chatList}><ChatList/></section>
        <section className={styles.chat}><Chat/></section>
    </main>
  )
}
