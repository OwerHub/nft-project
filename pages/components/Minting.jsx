import styles from '../../styles/landing/minting.module.scss'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import bugzCard from '../../assets/nfts/BugzCard.png'
import bugzLogo from '../../assets/nfts/BugzLogo.png'
import goofballsCard from '../../assets/nfts/goofballsCard.png'
import goofballsLogo from '../../assets/nfts/goofballsLogo.png'
import inkHeadCard from '../../assets/nfts/inkHeadsCard.png'
import inkHeadLogo from '../../assets/nfts/inkHeadLogo.png'
import splatterCard from '../../assets/nfts/splatterCard.png'
import splatterLogo from '../../assets/nfts/splatterLogo.png'
import sugarHitsCard from '../../assets/nfts/sugarhitsCard.png'
import sugarHitsLogo from '../../assets/nfts/sugarhitsLogo.png'


export default function Minting() {

  // TODO átnevezni egy szisztémára a png-ket
  // TODO maybe the head fontsize must be calculated from Window.innerWidht
  // TODO png-k helyett lehet, elég lesz kisebb webp, akkor kevesebet kell letöltenie

  const nfts = [
    {card: bugzCard, logo: bugzLogo},
    {card: goofballsCard, logo: goofballsLogo},
    {card: inkHeadCard, logo: inkHeadLogo},
    {card: splatterCard, logo: splatterLogo},
    {card: sugarHitsCard, logo: sugarHitsLogo},
  ]


  return (
    <div className={styles.mintingContainer} >
    <div className={styles.head} >
      minting soon
    </div>
    <div className={styles.nftCardWrapper}>
      { nfts.map((cardData, i) => (
        <div key={`ntfcrd${i}`} className={styles.nftCard} >
          <Image className={styles.nftImage} src={cardData.card} alt={`nftCard${i}`} />
          <Image  className={styles.nftImage} src={cardData.logo} alt={`nftCard${i}`} />
        </div>
      )
        
        ) }
    </div>
  </div>
  )
}
