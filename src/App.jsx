import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Events />
    </div>
  )
}

export default App
