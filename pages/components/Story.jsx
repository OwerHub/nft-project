import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import storyBackGround from '../../assets/backgrounds/storyBackground.webp'
import SectionTitle from './SectionTitle'
import styles from '../../styles/landing/story.module.scss'

export default function Story() {
  const [containerHeight, setContainerHeight] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={storyBackGround}
          alt="storyBackg" /* style={{position:'relative', zIndex:'0', width: '100%' , height:'auto', marginTop:'-19%', }} */
        />
      </div>
      <div className={styles.content}>
        <SectionTitle title="STORY" />
      </div>
    </div>
  )
}
