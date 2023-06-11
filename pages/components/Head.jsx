import React from 'react'
import styles from '../../styles/landing/head.module.css'
import Image from 'next/image';
import blackTop from '../../assets/backgrounds/blackTop.webp'
import inkHeadIcon from '../../assets/etc/inkHeadQuartersLogo.png'

// TODO - the blackTop better in svg

function Head() {
  return (
    <div className={`${styles.head}`} >
    <div className={styles.headContainer} style={{ backgroundImage: `url(${blackTop})` }}>
      <div className="backgroundWrapper">

      <Image src={blackTop} className={styles.blackTop} alt='blackTop' />
      </div>
      <div className={styles.headContentWrapper}>
        <Image src={inkHeadIcon} className={styles.inkLogo} alt='inkLogo' />
      </div>

    </div>
  </div> 
  )
}

export default Head