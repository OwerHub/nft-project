import React ,{useState} from 'react'
import styles from '../../styles/landing/head.module.scss'
import Image from 'next/image'

import blackTop from '../../assets/backgrounds/blackTop.webp'
import backlightsOriginal from '../../assets/etc/backLightsOriginal.webp'
import inkHeadIcon from '../../assets/etc/inkHeadQuartersLogo.png'

import speakerIcon from '../../assets/icons/blueIcons/speakerIcon.png'
import speakerIconShadow from '../../assets/icons/blueIcons/speakerIconShadow.png'
import speakerX from '../../assets/icons/blueIcons/speakerX.png'
import discordIcon from '../../assets/icons/blueIcons/discordIcon.png'
import discordIconShadow from '../../assets/icons/blueIcons/discordIconShadow.png'
import openSeaIcon from '../../assets/icons/blueIcons/openSeaIcon.png'
import openSeaIconShadow from '../../assets/icons/blueIcons/openSeaIconShadow.png'
import twitterIcon from '../../assets/icons/blueIcons/twitterIcon.png'
import twitterIconShadow from '../../assets/icons/blueIcons/twitterIconShadow.png'

// TODO - the blackTop better in svg
// TODO - Logo is better in  SVG
// TODO - if the icons come in SVG, the shadows more better

function Head() {

const [mute, setMute] = useState(false)


  // TODO maybe the y can be a %
  const menuData = [
    {
      content: 'About',
      translateY: '40px',
      translateX: '10%',
      rotate: '-10deg'
    },
    {
      content: 'Story',
      translateY: '110px',
      translateX: '0',
      rotate: '0deg'
    },
    {
      content: 'GameRoom',
      translateY: '5px',
      translateX: '-35px',
      rotate: '2deg'
    },
    {
      content: 'carton Theater',
      translateY: '75px',
      translateX: '0',
      rotate: '-5deg'
    },
    {
      content: 'faq',
      translateY: '35px',
      translateX: '-40px',
      rotate: '10deg'
    }
  ]

  

  return (
    <div
      className={styles.headContainer}
      style={{ backgroundImage: `url(${blackTop})` }}
    >
      <div className={styles.backgroundWrapper}>
        <Image src={blackTop} className={styles.blackTop} alt="blackTop" />
        <Image
          src={backlightsOriginal}
          className={styles.backLight}
          alt="backLight"
        />
      </div>

      <div div className={styles.headContentWrapper}>
        <div className={styles.logoWrapper}>
          <Image src={inkHeadIcon} className={styles.inkLogo} alt="inkLogo" />
          <div className={styles.iconsContainer}>

            <div className={styles.blueIconWrapper}
              onClick={()=> setMute(!mute)}
            >
              { mute && 
                <Image
                  className={styles.blueIconAdds}
                  src={speakerX}
                  alt="speakerX"
                />
              }

              <Image
                className={styles.blueIcons}
                src={speakerIcon}
                alt="speakerIcon"
              />
              <Image
                className={styles.blueIconShadow}
                src={speakerIconShadow}
                alt="speakershadow"
              />
            </div>

            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={discordIcon}
                alt="discordIcon"
              />
              <Image
                className={styles.blueIconShadow}
                src={discordIconShadow}
                alt="discordIconShadow"
              />
            </div>

            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={openSeaIcon}
                alt="openSeaIcon"
              />
              <Image
                className={styles.blueIconShadow}
                src={openSeaIconShadow}
                alt="openSeaIconShadow"
              />
            </div>

            <div className={styles.blueIconWrapper}>
              <Image
                className={styles.blueIcons}
                src={twitterIcon}
                alt="speakercon"
              />
               <Image
                className={styles.blueIconShadow}
                src={twitterIconShadow}
                alt="twitterIconShadow"
              />
            </div>
          </div>
        </div>
        <div className={styles.menuWrapper}>
          {menuData.map((data, i) => (
            <div
              className={styles.menuItem}
              key={`mnnt${i}`}
              style={{
                transform: `translate(${data.translateX}, ${data.translateY}) rotate(${data.rotate})`
              }}
            >
              {data.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Head
