import React, { useState } from 'react';
import './contador.css';

function Contador() {
  const [numero, setContador] = useState(0);

  function Incrementar() {
    setContador(numero + 1);
  }

  function Decrementar() {
    setContador(numero - 1);
  }

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
      <p>{numero}</p>
    </div>
  );
}

export default Contador;
