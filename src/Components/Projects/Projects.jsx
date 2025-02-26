import React from 'react'
import './Projects.css'
import newImg from '../../Images/newImg.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (

    <>
       <div className="heading-title">
        <h1>My Recent <span className='purple'>Works</span> </h1>
        <p>Here are a few projects I've worked on recently.</p>
        </div>
    

    <div className='projects-row'>

     

<div className="project-card-container">
        <div className="project-card">
            <div className="card-img-container">
            <img className='card-img' src={newImg} alt="" />
            </div>
            <div className="project-details">
                <h3 className='card-title'>Project Name</h3>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam.</p>
                <div className="card-buttons">
                    <button><FaExternalLinkAlt size={13}/>Live</button>
                    <button><FaExternalLinkAlt size={13}/>Github</button>
                </div>
            </div>
        </div>
</div>   

<div className="project-card-container">
        <div className="project-card">
            <div className="card-img-container">
            <img className='card-img' src={newImg} alt="" />
            </div>
            <div className="project-details">
                <h3 className='card-title'>Project Name</h3>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam.</p>
                <div className="card-buttons">
                    <button><FaExternalLinkAlt size={13}/>Live</button>
                    <button><FaExternalLinkAlt size={13}/>Github</button>
                </div>
            </div>
        </div>
</div>   

<div className="project-card-container">
        <div className="project-card">
            <div className="card-img-container">
            <img className='card-img' src={newImg} alt="" />
            </div>
            <div className="project-details">
                <h3 className='card-title'>Project Name</h3>
                <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam.</p>
                <div className="card-buttons">
                    <button><FaExternalLinkAlt size={13}/>Live</button>
                    <button><FaExternalLinkAlt size={13}/>Github</button>
                </div>
            </div>
        </div>
</div>   
    </div>
    </>
  )
}

export default Projects
