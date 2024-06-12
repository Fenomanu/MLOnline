import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleChange}
          placeholder="Predict..."
        />
        <button onClick={() => fetchData(parseFloat(inputValue))}>
          Result is {result}
        </button>
        <p>
          Welcome here!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
