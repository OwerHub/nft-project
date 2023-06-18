import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/landing/cartonTheater.module.scss'
import theaterBackground from '../../assets/backgrounds/cartonTheaterbg.webp'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function CartonTheater() {


  const [containerHeight, setContainerHeight] = useState(null)

  const bgref = useRef(null)
  
  useEffect(() => {
    if (bgref.current?.clientHeight) {
      setContainerHeight(bgref.current?.clientHeight + 50)
    }
    
  }, [bgref ])


  return (
   <div className={styles.container}  style={{ minHeight: containerHeight }}>
    <div className={styles.background}>
      <Image src={theaterBackground} alt='cartonTheaterBg' ref={bgref} />
    </div>
    <div className={styles.content}>
      <SectionTitle title='Theater' />
    </div>

   </div>
  )
}
