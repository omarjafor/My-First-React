import React from 'react';
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <h1>React by JaBed</h1>
      <Home/>
      <Person/>
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

export default App