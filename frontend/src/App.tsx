import { useState } from 'react'
import reactLogo from './assets/gear.svg'
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
    <div className='board'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sitio en construcción</h1>
      <div className="card">
        <input 
          type="number" 
          value={inputValue} 
          onChange={handleChange}
          placeholder="Predict..."
        />
<<<<<<< Updated upstream
        <button onClick={() => fetchData(parseFloat(inputValue))}>
          Result is {result}
        </button>
        <p>
          Welcome here!
=======
        <button onClick={() => fetchData(inputValue)}>
          Enviar
        </button>
        <p>
          {result ? result + "!" : ""}
        </p>
        <p>
          Pulsa enviar para una respuesta del backend
>>>>>>> Stashed changes
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
