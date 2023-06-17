import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/landing/cartonTheater.module.scss'
import theaterBackground from '../../assets/backgrounds/cartonTheaterbg.webp'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function CartonTheater() {
  const [containerHeight, setContainerHeight] = useState(null)

  const bgref = useRef(null)

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src={theaterBackground} alt="cartonTheaterBg" />
      </div>
      <div className={styles.content}>
        <SectionTitle title="Theater" />
      </div>
    </div>
  )
}
