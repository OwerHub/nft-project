import styles from '../styles/Landing.module.css'
import stoneTop from '../assets/backgrounds/stoneUpperBg1K.webp'

import Head from './components/Head';
import Minting from './components/Minting';
import About from './components/About';
import Story from './components/Story'
import GameRoom from './components/GameRoom';
import CartonTheater from './components/CartonTheater';

import Image from 'next/image';


export default function Landing() {


  return (
    <div className={styles.container}>

      <div className={styles.backgroundWrapper}>
        <Image src={stoneTop} className={styles.stoneTopImage} alt='stoneTop' />
      </div>
      {/*      <Head/>   */}
      <div className={styles.contentWrapper}>
        <div className="upPlaceholder" style={{ height: '25vh' }}>plac</div>
        <Minting />
        <About/>
        <Story/>
        <GameRoom/>
        <CartonTheater/>

      </div>


    </div>
  );
}