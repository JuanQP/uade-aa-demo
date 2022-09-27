import { useEffect } from 'react';
import { useState } from 'react';
import doge from './assets/doge.webp';
import './App.css';

function App() {
  const [message, setMessage] = useState('Waiting for server response...');

  useEffect(() => {
    fetch('/ping')
      .then(res => res.json())
      .then(res => {
        setMessage(res.message);
      });
  }, []);

  return (
    <div className='card'>
      <p className='title'>UADE - Arquitectura de Aplicaciones - Demo - Grupo 1</p>
      <samp>
        Server response:{`\n`}
        {message}
      </samp>
      <img className='doge' src={doge} alt="Doge" />
    </div>
  )
}

export default App
