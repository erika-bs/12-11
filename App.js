import React from 'react';
import './App.css';
import Counter from './components/Contador'; // Correct import
import Contador from './components/Contador2';
import ListaDeUsuarios from './components/ListaDeUsuarios'
import TemaEscuro from './components/TemaEscuro';
import Contador3 from './components/Contador3';

function App() {
  return (
    <div className="App">
      <Contador3 />
    </div>
  );
}

export default App;
