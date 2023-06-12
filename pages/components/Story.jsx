import React from 'react'
import Image from 'next/image'
import storyBackGround from '../../assets/backgrounds/storyBackGround.webp'

export default function Story() {
  return (
    <div>
      <div className="backGround">
        <Image src={storyBackGround} alt='storyBackg' style={{zIndex:'-5', width: '100%' , height:'auto', marginTop:'-17%', }}/>
      </div>

    </div>
  )
}
