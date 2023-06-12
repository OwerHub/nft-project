import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/landing/about.module.scss'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

import aboutBackground from '../../assets/backgrounds/aboutBackground.webp'


export default function About() {
  const [containerHeight, setContainerHeight] = useState(null)

  // set the outer container height to more than background height
  // I'm not sure, then this is the best way... and if it is, than i should make a hook for this

  // TODO it must handle the on-the-fly-resize
  const bgref = useRef(null)
  useEffect(() => {
    if (bgref.current?.clientHeight) {
      setContainerHeight(bgref.current?.clientHeight)
    }
    
  }, [bgref ])

  console.log(containerHeight)


  // i have to draw a shadow,
  console.log(bgref.current?.clientHeight)
  return (
    <div className={styles.container} style={{ minHeight: containerHeight }}>
      <div className={styles.background} ref={bgref}>
        < Image src={aboutBackground} alt='aboutBackGround' />
      </div>

      <div className={styles.content}>
        <div className={styles.head}>
          <SectionTitle title='About' />
        </div>
      </div>

    </div>
  )
}
