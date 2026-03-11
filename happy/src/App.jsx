import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NAV } from './components/norwegian/layout/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from "./components/norwegian/pages/home/Home"
import Footer from "./components/norwegian/layout/Footer";
import About from "./components/norwegian/pages/about/About";
import Greetings from "./components/norwegian/pages/greetings/Greetings";

function App () {


  return (
      <Router>
        <NAV />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greetings" element={<Greetings />} />
          <Route path="/nutrition" element={<About />} />
          <Route path="/education" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<About />} />
          <Route path="/gift" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App
