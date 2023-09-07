import React from 'react';
import './App.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <h1>React by JaBed</h1>
      <Student/>
      <Home/>
      {/* <Device name='Desktop PC' price='45600'/>
      <Device name='Laptop' price='50600' />
      <Device name='Mobile' price='65600' /> */}
      <Person/>
      <Developer/>
    </>
  )
}

// function Device({name, price}) {
//   return <h3>This Device is: {name} Price: {price} </h3>
// }

function Person() {
  const person = 'jabed';
  const age = 23;
  return <div className="student">
    <h3>Hello, i am {person} age {age}</h3>
  </div>
}

function Student(props) {
  return (
    <div style={{
      border: '2px solid yellow',
      padding: '15px',
      margin: '15px',
      bordeRadius: '10px'
    }}>
      <h3>Hello, This is a Student</h3>
      <p>Name:</p>
      <p>Age: </p>
      <p>Grade: </p>
    </div>
  )
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