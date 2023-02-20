import "./App.css";
import Events from "./components/Events";
import Footer from "./components/Footer";
import LandingPage from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
