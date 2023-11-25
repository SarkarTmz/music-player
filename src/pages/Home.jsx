import React from 'react'

import m1 from '../musics/Sushant KC - Sarangi (Official Music Video).mp3'

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
        <div className="music-main">

         <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <h2>Music 1</h2>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>

        </div>
      
        </div>

      {/* {
           music.map((sound) =>(
            <audio controls key={sound.id}>
              <source src={sound.src} type="audio/mpeg"/>
            </audio>
           ))
         } */}

    </>
  )
}

export default Home