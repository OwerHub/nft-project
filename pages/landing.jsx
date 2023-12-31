import styles from '../styles/landing.module.scss'
import stoneTop from '../assets/backgrounds/stoneUpperBg1K.webp'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

import Head from './components/Head'
import Minting from './components/Minting'
import About from './components/About'
import Story from './components/Story'
import GameRoom from './components/GameRoom'
import CartonTheater from './components/CartonTheater'
import Faqs from './components/Faqs'

export default function Landing() {
  const headRef = useRef(null)
  const [headHeight, setHeadHeight] = useState()

  // TODO set the headHeight to headRef's Height
  // TODO ref add to Head

  return (
    <div className={styles.container} style={{ position: 'relative' }}>
      <div className={styles.backgroundWrapper}>
        <Image src={stoneTop} className={styles.stoneTopImage} alt="stoneTop" />
      </div>
      <Head />

      <div className={styles.contentWrapper}>
        <div className={styles.placeholder}></div>
        <Minting />
        {/*         <About /> */}
        <About />
        <Story />
        <GameRoom />
        <CartonTheater />
        <Faqs />
      </div>
    </div>
  )
}
