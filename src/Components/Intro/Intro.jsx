import React from 'react'
import './Intro.css'
// import introImg from '../../Images/intro.svg'
import HeadImg2 from '../../Images/HeadImg2'

const Intro = () => {
  return (
    

        <div className="row-intro">
            
            <div className="intro-content">
                <h1>LET  ME  <span className='purple'>INTRODUCE</span>   MYSELF</h1> <br /><br />
                <p>
                    I'm a programmer that turns coffee into code..! <br /><br />
                    I am fluent in classics like <b className='purple'><i >C++, JavaSript, ReactJs, NodeJs and Mysql. </i></b> <br /><br />
                    My field of Interest's are building new <b className='purple'><i >Web Applications</i></b>  and also in areas related to <b className='purple'><i >Mobile Applications</i></b>. <br /><br />
                    I also apply my passion for developing products with <b className='purple'><i >Modern Javascript Frameworks</i></b> like <b className='purple'><i >Node.js and React.js .</i></b> 
                </p>
            </div>

            <div className="intro-img">
                <HeadImg2/>
            </div>
        </div>
      

  )
}

export default Intro
