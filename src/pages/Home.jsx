import React from 'react'

import musics from '../musics/Sushant KC - Sarangi (Official Music Video).mp3'

const Home = () => {
  const music =[
    {
      id : 1,
      title : 'Sushant KC - Sarangi',
      src : 'musics',
    }
  ]
  return (
    <>
      <div className="home container">
        <div>
         {
           music.map((sound) =>(
            <audio controls key={sound.id}>
              <source src={sound.src} type="audio/mpeg"/>
            </audio>
           ))
         }
           <audio controls>
            <source src={musics} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
    </>
  )
}

export default Home