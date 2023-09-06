import React from 'react';
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <h1>React by JaBed</h1>
      <Home/>
      <Person/>
      <Developer/>
    </>
  )
}

function Person() {
  const person = 'jabed';
  const age = 23;
  return <div className="student">
    <h3>Hello, i am {person} age {age}</h3>
  </div>
}

function Developer() {
  const developerStyle = {
    border: '2px solid red',
    padding: '15px',
    margin: '15px',
    bordeRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h4>Web Developer</h4>
      <p>Coding: JavaScript</p>
    </div>
  )
}
export default App