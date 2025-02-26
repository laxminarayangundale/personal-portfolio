import React from 'react'
import './Header.css'
import { useState } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
// import img from '../../Images/header.svg'
import HeadImg from '../../Images/HeadImg';
import Intro from '../Intro/Intro';


const Header = () => {

    const [text] = useTypewriter({
        words:['Web Developer', 'MERN Stack Developer' ,'Backend Enthusiast'],
        loop:{},
    })
  
  return (
    <>
    <div className='row header-container '>
      
      <div className="header-left">
        <h1>Hi There!&nbsp; <span class="wave">👋🏻</span></h1>
        <h1>
            I'M&nbsp;
            <strong class="main-name">Laksh Patil...</strong>
        </h1>
        <h3 className='typewriter'>{text}</h3>
      </div>
      <div className="header-right-img">
        {/* <img src={img} alt="" /> */}
        <HeadImg />
      </div>

    </div>
<Intro/>
    </>
  )
}

export default Header
