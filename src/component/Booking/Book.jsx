import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Book.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {Slide2} from './slide2.png'
import Form from './Form'


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px',
    
}
const slideImages = [
    {
      url: 'https://nolinskiparis.com/wp-content/uploads/2022/06/restaurant-nolinski-paris-5-etoiles-luxe-12-guillaume-de-laubier.jpg',
      caption: 'Book table now',
      info:'Enjoy breakfast in the clouds, lunch in the sky or dinner beneath the stars and fall under the spell of being perched so high up that you get the feeling Paris is all yours.',
    },
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5f9decf1e529e27a4705d448/1681676661420-MZGRIQXRH7H87EH70AB9/MacBook+Pro+-+22banner-17.png?format=2500w',
      caption: 'Emerald room',
      info:'Take a Mediterranean voyage without moving from your seat, and experience flavors from Little Lemon. Plan Ahead for an Exceptional Dining Experience: Reserve Your Table Now! ',
    },
  ];


  const buttonStyle = {
    fontSize: '20px',
    background: 'none',
    border: '0px',
    color:'#ffff',
    margin: '20px',
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoIosArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoIosArrowForward/></button>
}

const indicators = (index) => (<div className="indicator">{index + 1}</div>);
  
  
const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide {...properties} indicators={true}>
           {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `linear-gradient(181deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%),url(${slideImage.url})` }}>
                  <span className='caption'>{slideImage.caption}</span>
                  <span className='info'>{slideImage.info}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
      )
}




function Book() {
  return (
    <div>
        <div className="slide-container">
        <Slideshow />
        </div>
      
        <div className='booking-session'>
        </div>

        <div className="booking-main">
          <h1>Booking Table</h1>
          <Form/>
        </div>
      

    </div>
  )
}

export default Book
