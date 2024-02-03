// App.tsx

import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [capital, setCapital] = useState('');
  const [interest, setInterest] = useState('');

  const handleClear = () => {
    setCapital('');
    setInterest('');
    setReturnX('');
  };

  const calculateReturnX = () => {
    const parsedCapital = parseFloat(capital);
    const parsedInterest = parseFloat(interest);

    return isNaN(parsedCapital) || isNaN(parsedInterest)
      ? null
      : (parsedCapital * (parsedInterest / 100)).toFixed(2);
  };

  const calculateReturnY = () => {
    const parsedReturnX = parseFloat(calculateReturnX());
    const parsedCapital = parseFloat(capital);

    return isNaN(parsedReturnX) || isNaN(parsedCapital)
      ? null
      : (parsedReturnX + parsedCapital).toFixed(2);
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
      <div className="card form-container">
        <label htmlFor="capital">Capital:</label>
        <input
          type="text"
          id="capital"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          placeholder="Ingrese el capital"
        />

        <label htmlFor="interest">Interés:</label>
        <input
          type="text"
          id="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          placeholder="Ingrese el interés"
        />

        <label htmlFor="returnX">Retorno neto (X):</label>
        <input type="text" value={calculateReturnX()} disabled />

        <label htmlFor="returnY">Retorno bruto (Y):</label>
        <input type="text" value={calculateReturnY()} disabled />

        <button id="clean_button" onClick={handleClear}>Limpiar</button>
      </div>
    </>
  );
}

export default App;
