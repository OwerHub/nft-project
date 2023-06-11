import styles from '../styles/Landing.module.css'
import Head from './components/Head';
 import stoneTop from '../assets/backgrounds/stoneUpperBg1K.webp'
import blackTop from '../assets/backgrounds/blackTop.webp'
import Image from 'next/image';
import inkHeadIcon from '../assets/etc/inkHeadQuartersLogo.png'

export default function Landing() {


  return (
    <div className={styles.container}>
   <Image src={stoneTop} className={styles.stoneTopImage} alt='stoneTop' /> 
     <Head/>

    {/* ----MINTING SOON---- */}

    </div>
  );
}