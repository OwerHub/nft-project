import React from 'react'
import styles from '../../styles/landing/sectionTile.module.scss'

export default function SectionTitle(props) {
  const { title } = props

  /*   const dynamicStyle = {
    fontSize: '12em',

    display: 'flex',
    justifyContent: 'center',
    letterSpacing: '-15px',
    textAlign: 'center'
  } */

  return <div className={styles.titleContainer}>{title}</div>
}
