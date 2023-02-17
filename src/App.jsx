import './App.css'
import Events from './components/Events'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'



function App() {

  return (
    <div className="App">

      <Navbar/>
      <Main/>
      <Events />
      <Footer/>
    </div>
  )
}

export default App
