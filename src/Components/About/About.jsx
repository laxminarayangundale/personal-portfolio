import React from 'react'
import './About.css'
import HeadImg2 from '../../Images/HeadImg2'
import { FaRegHandPointRight } from "react-icons/fa";
import pyIcon from '../../Images/python-icon.svg'
import js from '../../Images/js-icon.svg'
import java from '../../Images/java-icon.svg'
import cpp from '../../Images/cpp-icon.svg'
import html from '../../Images/html-icon.svg'
import css from '../../Images/css3-icon.svg'
import react from '../../Images/react-icon.svg'
import node from '../../Images/node-icon.svg'
import mongodb from '../../Images/mongodb-icon.svg'
import bootstrap from '../../Images/bootstrap-icon.svg'
import vsCode from '../../Images/vs-code-icon.svg'
import github from '../../Images/github-icon.svg'
import tailwind from '../../Images/tailwind-icon.svg'
import { FaLinkedinIn,FaGithub,FaInstagram, FaTwitter  } from "react-icons/fa";


const About = () => {
  return (
    <>
    <div className="row-about">
            
    <div className="about-content">
        <h1>Know Who <span className='purple'>I'M</span></h1> <br /><br />
        <p>
        Hi Everyone, I am <span className='purple'>Laksh Patil</span> from <span className='purple'>Pune, Maharashtra. </span>
I am currently final year B.Tech student of Information Technology at GHRCEM, Pune. I'm <b className='purple'>Web developer</b>  and <b className='purple'>Backend enthusiast.</b> <br />

I am looking forward to gain competency and exposure in <b className='purple'> Web development, Mobile app developement and Cloud Computing. </b> <br /><br />

Apart from coding, some other activities that I love to do!
        </p>
        <br />
    <ul>
        <li className='about-activity'><FaRegHandPointRight />Playing cricket</li>
        <li className='about-activity'><FaRegHandPointRight />Listening Music</li>
    </ul>
    <br />
    <div className="footer-quote">
    <p className='purple '>"Do what you love!"</p>
    <p className='purple '>- Laksh</p>
    </div>
    
    </div>

    <div className="about-img">
        <HeadImg2/>
    </div>
</div>

<h1 className='skillset-heading'> <strong className='purple'>Professional Skillset</strong> </h1>

<div className="skills-container">
    <h3 className='skills-heading'>Languages</h3>

<div className="skills-row">
        
    <div className="tech-icons">
   <img src={cpp} alt="" />

</div>

    <div className="tech-icons">
    <img src={js} alt=""  />
    </div>

    <div className="tech-icons">
  <img src={java} alt="" />
    </div>

    <div className="tech-icons">
        <img src={pyIcon} alt="" />
    </div>

    </div>
</div>

<div className="skills-container">
    <h3 className='skills-heading' >Web Development</h3>

<div className="skills-row">
        
    <div className="tech-icons">
   <img src={html} alt="" />
    </div>

    <div className="tech-icons">
    <img src={css} alt=""  />
    </div>

    <div className="tech-icons">
  <img src={js} alt="" />
    </div>

    <div className="tech-icons">
        <img src={react} alt="" />
    </div>

    <div className="tech-icons">
        <img src={bootstrap} alt="" />
    </div>

    <div className="tech-icons">
        <img src={tailwind} alt="" />
    </div>

    <div className="tech-icons">
  <img src={node} alt="" />
    </div>

    <div className="tech-icons">
        <img src={mongodb} alt="" />
    </div>

    </div>
</div>

<div className="skills-container">
    <h3 className='skills-heading'> <span className='purple'>Tools </span>I Use </h3>

    <div className="skills-row">
        
    <div className="tech-icons">
   <img src={vsCode} alt="" />
    </div>

    <div className="tech-icons">
    <img src={github} alt=""  />
    </div>

    </div>
</div>

<div className="about-social">
<h1>FIND ME ON</h1>
<p>Feel free to <span className="purple">connect</span>  with me</p>

<ul className='about-social-links'>
   <li className="social-icon"><div className="icon"><FaLinkedinIn /></div></li>
   <li className="social-icon"><div className="icon"><FaGithub /></div></li>
   <li className="social-icon"><div className="icon"><FaInstagram /></div></li>
   <li className="social-icon"><div className="icon"><FaTwitter /></div></li>
</ul>
</div>
</>
  )
}

export default About
