import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0.0)
  const [inputValue, setInputValue] = useState(0.0)
  function fetchData(value:number) {
    console.log("Result")
    fetch('http://localhost:5000/predict/' + String(value))
      .then(response => response.json())
      .then(json => setResult(json))
      .catch(error => console.error(error));
  }
  const handleChange = (e:any) => {
    setInputValue(e.target.value);
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
          type="text" 
          value={inputValue} 
          onChange={handleChange} 
          placeholder="Predict..."
        />
        <button onClick={() => fetchData(inputValue)}>
          Result is {result}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
