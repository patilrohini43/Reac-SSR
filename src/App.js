import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    color: "#efeaea",
    fontSize: "20px",
    backgroundColor: "#005980",
    borderColor: "#ddd",
    borderStyle: "solid"
  };
  return (
    <div style={data}>
      <h1 style={{textAlign:'center'}}>Hello Hi</h1>
    </div>
  );
}

export default App;
