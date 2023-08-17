import React from 'react'
import './Navbar.css';
import Logo from './logo2.png'
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='app_navbar'>
        <a className='app_navbar_logo'>
            <img className='nav_logo_img' src={Logo} alt="app logo"/>
            
        </a>
        <ul className='app_navbar_links'>
            <li className='nav_links'><NavLink to="/home">HOME</NavLink></li>
            <li className='nav_links'><a href="#about">ABOUT</a></li>
            <li className='nav_links'><a href="#about">MENU</a></li>
            <li className='nav_links'><a href="#about">CONTACT</a></li>
            
        </ul>
       <div className='nav_lang'>
       <button className='nav_btn_book'>BOOK TABLE</button>
        <NavLink to='/product'>
        <button className='nav_btn_order'>ORDER ONLINE</button>
        </NavLink>
        
        
       </div>
    </nav>
   
  )
}

export default Navbar
