import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import {  Routes, Route } from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import bgImg from './Images/bg.jpg'
import Particles from './Components/Particles/Particles';

function App() {
  return (
    <div className="App">
      {/* <div className="App" style={{ backgroundImage: `url(${bgImg})`}}> */}
      <Navbar/>
      {/* <Header/> */}
      {/* <Intro/> */}
      {/* <About/> */}

      <Routes>
      <Route exact path="/" element={<Header/>}/>
        <Route path="/about" element={<About/> }/>
        <Route path="/projects" element={<Projects/> }/>
        <Route path="/resume" element={<Resume/> }/>
      </Routes>

      <Particles/>
    
    </div>
  );
}

export default App;
