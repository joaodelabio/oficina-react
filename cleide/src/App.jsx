import { useState } from 'react'
import './App.css'

function App() {

  const [numero, setContador] = useState(0)

  function Incrementar() {
    setContador (numero + 1);
  }

  function Decrementar() {
    setContador (numero - 1);
  }

  return (
    <>
      <h1>Contador</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <p>{numero}</p>
    </>
  )
}

export default App
