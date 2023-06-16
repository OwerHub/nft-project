import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import storyBackGround from '../../assets/backgrounds/storyBackGround.webp'
import SectionTitle from './SectionTitle'
import styles from '../../styles/landing/story.old.module.scss'

export default function Story() {
  const [containerHeight, setContainerHeight] = useState(null)

  const bgref = useRef(null)

  useEffect(() => {
    if (bgref.current?.clientHeight) {
      setContainerHeight(bgref.current?.clientHeight + 50)
    }
  }, [bgref])

  return (
    <div className={styles.container} style={{ minHeight: containerHeight }}>
      <div className={styles.background}>
        <Image
          src={storyBackGround}
          ref={bgref}
          alt="storyBackg" /* style={{position:'relative', zIndex:'0', width: '100%' , height:'auto', marginTop:'-19%', }} */
        />
      </div>
      <div className={styles.content}>
        <SectionTitle title="STORY" />
      </div>
    </div>
  )
}
