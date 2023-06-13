import React from 'react'
import SectionTitle from './SectionTitle'
import styles from '../../styles/landing/faq.module.scss'
import stoneBG from '../../assets/backgrounds/stoneUpperBg1K.webp'
import Image from 'next/image'

export default function Faqs() {
  
  // TODO this is temporary Style
  return (
    <div className={styles.container}  >
    <div className={styles.background} >
      <Image src={stoneBG}  alt='stoneBg' /* style={{position:'relative', zIndex:'0', width: '100%' , height:'auto', marginTop:'-19%', }} *//>
    </div>
    <div className={styles.content}>
      <SectionTitle  title='FAQ' />
    </div>

  </div>
  )
}
