import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'

function App() {
  const [result, setResult] = useState(0.0)
  const [inputValue, setInputValue] = useState("")
  function fetchData(value:number) {
    console.log("Result")
    fetch('https://api.mdiazpastor.com/predict/' + String(value))
      .then(response => response.json())
      .then(json => setResult(json))
      .catch(error => console.error(error));
  }
  const handleChange = (e:any) => {
    setInputValue(e.target.value)
  };

  return (
    <>
      <Header>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#skills'>Skills</a></li>
      </Header>
      
      {/*<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>*/}

      <span className='br-big'></span>

      <About id="about"/>

      <span className='br-small'></span>

      <Experience id="experience"/>

      <span className='br-small'></span>

      <Projects id="projects"/>

      <span className='br-small'></span>
      
      <div className="horizontal">
        <Skills id="skills"/>
        <SoftSkills/>
      </div>

      <span className='br-mid'></span>

      <Footer/>

      <span className='br-small'></span>
    </>
  )
}

export default App
