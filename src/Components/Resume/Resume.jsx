import React from 'react'
import './Resume.css'
import { LuDownload } from "react-icons/lu";

const Resume = () => {
  return (
    <div className='resume-container'>
      <button className="download-resume"><LuDownload />Resume</button>

    <div className="resume-left-right-container">
      <div className="resume-left">
            <h3 className='resume-title'>Experience</h3>

            <div className="resume-item">
               <h5 className='resume-item-title'>VirtueByte (Intern)</h5>
               <p><em>July 2025 - December 2025</em></p>
               <ul>
                <li>‣  &nbsp;Worked on Main Dashboard of the Company’s Website.</li>
                <li>‣  &nbsp;Build customised APIs and tested them on Postman.</li>
                <li>‣  &nbsp;APIs are created in NodeJs using ExpressJs and data storage on MongoDB.</li>
                <li>‣  &nbsp; Created UI components with ReactJs.</li>
               </ul>
            </div>
            <div className="resume-item">
               <h5 className='resume-item-title'>VirtueByte (Intern)</h5>
               <p><em>July 2025 - December 2025</em></p>
               <ul>
                <li>‣  &nbsp;Worked on Main Dashboard of the Company’s Website.</li>
                <li>‣  &nbsp;Build customised APIs and tested them on Postman.</li>
                <li>‣  &nbsp;APIs are created in NodeJs using ExpressJs and data storage on MongoDB.</li>
                <li>‣  &nbsp;Created UI components with ReactJs.</li>
               </ul>
            </div>

            
            <h3 className='resume-title'>Extracurricular Activities</h3>
            <div className="resume-item">
            <h5 className='resume-item-title'>Event Volunteer</h5>
            <ul>
                <li>‣ &nbsp;Planning and managing the events in technical fiesta of our college.</li>
            </ul>
            </div>

      </div>
    
      <div className="resume-right">
      <h3 className='resume-title'>Education</h3>
      <div className="resume-item">
               <h5 className='resume-item-title'>B.Tech in Information Technology || [GHRCEM, Pune]</h5>
               <p><em>2021 - Present</em></p>
               <ul>
                <li>‣  &nbsp;CGPA: 7.71 (Till 6th Sem)</li>
               </ul>
            </div>
            <div className="resume-item">
               <h5 className='resume-item-title'>12th BOARD [ Vishwabharti Jr. College, Hayatnagar ]</h5>
               <p><em>2020</em></p>
            </div>
            <div className="resume-item">
               <h5 className='resume-item-title'>10th BOARD [Shri Sidheshwar Vidyalaya,Basmath]</h5>
               <p><em>2018</em></p>
            </div>

            <h3 className='resume-title'>Ranks and Achivements</h3>
      <div className="resume-item">
               <ul>
                <li>‣ &nbsp;Appointed as Employee of the month during my internship at VirtueByte.</li>
                <li>‣ &nbsp;Solved 550+ Problems on leetcode and 470+ Problems on codeforces</li>
                <li>‣ &nbsp;Solved 1000+ problems on various coding platform</li>
               </ul>
            </div>

      </div>
    </div>
    <button className="download-resume" style={{marginTop: '20px'}}><LuDownload />Resume</button>

    </div>
  )
}

export default Resume
