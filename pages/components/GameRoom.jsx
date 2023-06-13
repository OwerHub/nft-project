import React from 'react'
import styles from '../../styles/landing/gameroom.module.scss'
import SectionTitle from './SectionTitle'

export default function GameRoom() {
  return (
    <div className={styles.container}>
      <div className={styles.background}/>

        <div className={styles.content}>
        <SectionTitle title='Game Room'/>
        </div> 

      
    </div>
  )
}
