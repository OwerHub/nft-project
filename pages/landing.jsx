import styles from '../styles/Landing.module.css'
import Head from './components/Head';
import Minting from './components/Minting';
import stoneTop from '../assets/backgrounds/stoneUpperBg1K.webp'

import Image from 'next/image';


export default function Landing() {


  return (
    <div className={styles.container}>
   
   <div className={styles.backgroundWrapper}>
      <Image src={stoneTop} className={styles.stoneTopImage} alt='stoneTop' /> 
    </div> 
    <div className={styles.contentWrapper}>
 {/*      <Head/>   */}
    
     <Minting/>
    </div>
    

    </div>
  );
}