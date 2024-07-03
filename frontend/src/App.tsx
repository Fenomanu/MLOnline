import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'

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
      
      <About id="about"/>

      <Experience id="experience"/>

      <Projects id="projects"/>

      <section hidden className="projects">
        <h1></h1>
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleChange}
          placeholder="Predict..."
        />
        <button onClick={() => fetchData(parseFloat(inputValue))}>
          Enviar
        </button>
        <p>
          {result ? result + "!" : ""}
        </p>
        <p>
          Pulsa enviar para una respuesta del backend
        </p>
      </section>

      <div className="horizontal">
        <Skills id="skills"/>
        <SoftSkills/>
      </div>

    </>
  )
}

export default App
