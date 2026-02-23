import "./sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { NAV } from './components/norwegian/layout/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from "./components/norwegian/pages/home/Home"
import Footer from "./components/norwegian/layout/Footer";

function App () {


  return (
      <Router>
        <NAV />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App
