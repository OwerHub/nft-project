import styles from '../styles/Landing.module.css'
import stoneTop from '../assets/backgrounds/stoneUpperBg1K.webp'
import Image from 'next/image';

  export default function Landing() {

    console.info('stonetop is ', stoneTop)

    return (
      <div className={styles.container}>
       <Image src={stoneTop} className={styles.stoneTopImage}  alt='stoneTop'/>
      </div>
    );
  }