import React from 'react'
import './Navbar.css'
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { LuFileSpreadsheet } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import logo from '../../Images/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[isOpen, setIsOpen] = useState(false);
    const [navbarColor, setNavbarColor] = useState('#000');

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    const handleScroll = () => {
      if (window.scrollY > 5) {
          setNavbarColor('-webkit-linear-gradient( 270deg, #00b3a4, #000)'); 
      } else {
          setNavbarColor('black'); 
      }
  };

  // Set up the scroll event listener
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

 

  return (
    <div className={`navbar-container ${isOpen?"active-n":''}`} style={{ background: navbarColor }} >
      <div className="navbar-left-logo">
        <h3>LAKSH</h3>
        {/* <Logo/> */}
      </div>
      <div className="navbar-right-menu">
        <ul className={isOpen?'active':''}>
            <li> <Link to='/'> <AiOutlineHome /> Home </Link></li>
            <li> <Link to='/about'> <GoPerson /> About </Link></li>
            <li> <Link to='/projects'> <RiComputerLine /> Projects </Link></li>
            <li> <Link to='/resume'> <LuFileSpreadsheet /> Resume </Link></li>
        </ul>
       
      </div>
      <div className='hamburgerMenu-container'>
      {isOpen? <RxCross2 size={30} className="hamburgerMenu" onClick={toggleMenu}/>:<RxHamburgerMenu size={30} className="hamburgerMenu" onClick={toggleMenu}/>}
      </div>
 {/* <input type="checkbox" id="checkbox"/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label> */}



    </div>
  )
}

export default Navbar
