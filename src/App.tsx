import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <button style={{width: 250, padding: 20, backgroundColor:'#E63A6A', border:"none",color:"white",fontWeight:'bold',borderRadius:10, fontSize:20}}>
           Main button
         </button>
      </header>
    </div>
  );
}

export default App;
