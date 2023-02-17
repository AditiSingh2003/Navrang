import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'



function App() {
 

  return (
    <div className="App">

      <Navbar/>
      <Events />
    </div>
  )
}

export default App
