import React from 'react';
import './App.css';
import Zadacha1 from "./components/Task1/Task1";

function App() {
  return (
    <div className='app-wrapper'>
      <Zadacha1 name='Artem' text='npm start нажимал?' time='20:00'/>
    </div>
  );
}

export default App;
