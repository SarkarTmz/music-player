import React from 'react'
import '../styles/Home.css'

import m1 from '../musics/Sushant KC - Sarangi (Official Music Video).mp3'
import m2 from '../musics/Ashutosh KC - MAYA.mp3'
import m3 from '../musics/Je Chhau Timi - Swoopna Suman x Samir Shrestha.mp3'
import m4 from '../musics/Nachahe ko Hoina -The Edge Band.mp3'
import m5 from '../musics/RANG - Nikhita Thapa X Brijesh Shrestha.mp3'
import m6 from '../musics/Sathi - Sushant KC.mp3'
import m7 from '../musics/Sushant KC - Muskurayera.mp3'
import m8 from '../musics/Sushant KC - Risaune Bhaye.mp3'


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
      <div className="home section container">
        <div className="music-main">

         <div className="music">
          <p>Sushant KC - Sarangi </p>
           <audio controls>
            <source src={m1} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Ashutosh KC - MAYA</p>
           <audio controls>
            <source src={m2} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Je Chhau Timi - Swoopna Suman x Samir Shrestha</p>
           <audio controls>
            <source src={m3} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Nachahe ko Hoina -The Edge Band</p>
           <audio controls>
            <source src={m4} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>RANG - Nikhita Thapa X Brijesh Shrestha 1</p>
           <audio controls>
            <source src={m5} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Sathi - Sushant KC</p>
           <audio controls>
            <source src={m6} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Sushant KC - Muskurayera</p>
           <audio controls>
            <source src={m7} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Sushant KC - Risaune Bhaye</p>
           <audio controls>
            <source src={m8} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
              <div className="music">
          <p>Sushant KC - Risaune Bhaye</p>
           <audio controls>
            <source src={m8} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Sushant KC - Risaune Bhaye</p>
           <audio controls>
            <source src={m8} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          </div>
          <div className="music">
          <p>Sushant KC - Risaune Bhaye</p>
           <audio controls>
            <source src={m8} type="audio/mpeg" />
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