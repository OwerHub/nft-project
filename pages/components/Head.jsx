import React from 'react'
import styles from '../../styles/landing/head.module.scss'
import Image from 'next/image'

import blackTop from '../../assets/backgrounds/blackTop.webp'
import inkHeadIcon from '../../assets/etc/inkHeadQuartersLogo.png'

import discordIcon from '../../assets/icons/blueIcons/discordIcon.png'
import speakerIcon from '../../assets/icons/blueIcons/speakerIcon.png'
import speakerIconShadow from '../../assets/icons/blueIcons/speakerIconShadow.png'
import speakerX from '../../assets/icons/blueIcons/speakerX.png'
import openSeaIcon from '../../assets/icons/blueIcons/openSeaIcon.png'
import twitterIcon from '../../assets/icons/blueIcons/twitterIcon.png'

// TODO - the blackTop better in svg
// TODO - Logo is better in  SVG
// TODO - if the icons come in SVG, the shadows more better

function Head() {
  return (
    <div
      className={styles.headContainer}
      style={{ backgroundImage: `url(${blackTop})` }}
    >
      <div className={styles.backgroundWrapper}>
        <Image src={blackTop} className={styles.blackTop} alt="blackTop" />
      </div>

      <div className={styles.headContentWrapper}>
        <div className={styles.logoWrapper}>
          <Image src={inkHeadIcon} className={styles.inkLogo} alt="inkLogo" />
          <div className={styles.iconContainer}>
            <Image
              className={styles.blueIcons}
              src={speakerIcon}
              alt="speakercon"
            />
            <Image
              className={styles.blueIcons}
              src={discordIcon}
              alt="speakercon"
            />
            <Image
              className={styles.blueIcons}
              src={openSeaIcon}
              alt="speakercon"
            />
            <Image
              className={styles.blueIcons}
              src={twitterIcon}
              alt="speakercon"
            />
            {/*  <div className={styles.blueIconWrapper}>
            <Image
              className={styles.blueIcons}
              src={speakerIconShadow}
              alt="speakericonshadow"
              style={{ transform: 'translateY(10px)' }}
            />
            
              <Image
                className={styles.blueIcons}
                src={speakerIcon}
                alt="speakercon"
              />
            </div>
            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={discordIcon}
                alt="speakercon"
              />
            </div>
            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={openSeaIcon}
                alt="speakercon"
              />
            </div>
            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={twitterIcon}
                alt="speakercon"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
