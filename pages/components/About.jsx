import React, { useRef, useState, useEffect } from 'react'
import styles from '../../styles/landing/about.module.scss'
import Image from 'next/image'
import SectionTitle from './SectionTitle'

import aboutBackground from '../../assets/backgrounds/aboutBackground.webp'
import aboutShadow from '../../assets/backgrounds/AboutShadowPerformance.webp'

export default function AboutNew() {
  const [containerHeight, setContainerHeight] = useState(null)

  // set the outer container height to more than background height
  // I'm not sure, then this is the best way... and if it is, than i should make a hook for this

  // TODO it must handle the on-the-fly-resize

  const bgref = useRef(null)

  // TODO refactor this to a custom hook
  useEffect(() => {
    if (bgref.current?.clientHeight) {
      setContainerHeight(bgref.current?.clientHeight + 50)
    }
  }, [bgref])

/*   console.log(containerHeight) */

  // PERFORMANCE shadow to SVG
  console.log(bgref.current?.clientHeight)
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={aboutBackground}
          className={styles.backgroundImg}
          alt="aboutBackGround"
        />
        <Image
          src={aboutShadow}
          className={styles.backgroundShadow}
          alt="aboutBackGroundShadow"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.head}>
          <SectionTitle title="About" />
        </div>
      </div>
    </div>
  )
}
