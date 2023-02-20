import './App.css'
import Events from './components/Events'
import LandingPage from './components/Main'
import Navbar from './components/Navbar'



function App() {

  return (
    <div className="App">
      <Navbar/>
      <LandingPage /> 
      <Events />
    </div>
  )
}

export default App
