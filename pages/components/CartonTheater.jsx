import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/landing/cartonTheater.module.scss'
import theaterBackground from '../../assets/backgrounds/cartonTheaterbg.webp'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function CartonTheater() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={theaterBackground} alt="cartonTheaterBg" />
      </div>
      <div className={styles.content}>
        <SectionTitle title="Cartoon Theater" />
      </div>
    </div>
  )
}
