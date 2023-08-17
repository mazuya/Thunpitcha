import React from 'react'
import './Home.css';
import {Parallax} from 'react-parallax'
import Bgpage2 from './bgpage2.jpg'

function Home() {
  return (
    <>
    <Parallax strength={-300} bgImage={'https://s3-alpha-sig.figma.com/img/f881/7827/8e234db00aa140e8c861dd3d2c74dfac?Expires=1693180800&Signature=V4paTkWoOqHvnZZsGsrAJmaAzhP-4j2J8y7kL0~23rQb0CJzKf1yz94vMH9E~tD8eZE6RAno-AoD6b~vRTmeZDTqqXIEZyR2WIYIy1n8BUFVEIO3zECvwur8DKgqYV5KXvo-hB1arCw-daKDc9D4kdCR-98yiSbqQzY2j3nyb26DO5bJSsbOxVwZqzmYlKXfcg24sgoauYno0PkqInP4HF4SMSQwfLmD4~VbeXzSg~2u-B3g8cjzJsNmSH0RgRZ0LTUhJWqY4q-6JjQwYWHYyENKDHXitjWaE21zTN9NgB0yi7gZL6Cdg7yR23ozA9XHvLU~od4-81g-pqg3-3HscQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}>
    <div className='background-container'>
      <div className='Home-container'>
        <h2 className='welcome'>Welcome to</h2>
        <h3 className='ltlm'>Little Lemon</h3>
        <p className='text'>. . .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ut tempora. Vel sit quas omnis deleniti optio temporibus necessitatibus numquam commodi minima, excepturi, harum, expedita iste non quis odit? Expedita, nemo! </p>
      </div>

      <button className='reserve'>RESERVE TABLE NOW</button>
    </div>
    </Parallax>

    <Parallax strength={-300} bgImage={Bgpage2}>
      <div className='home-page2'>
        <h1>30% off !</h1>
        <p>Black Friday discount</p>
        
      </div>
    </Parallax>
    
    </>
    

    
  )
}

export default Home
