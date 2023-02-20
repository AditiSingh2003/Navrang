import './App.css'
import Events from './components/Events'

import LandingPage from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Events />
      <Footer/>
    </div>
  )
}



export default App
