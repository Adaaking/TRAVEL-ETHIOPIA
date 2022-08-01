import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TourSites from "./Components/TourSites";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route path="/tours" element = {<TourSites />} />
          <Route path="/about" element= {<About />} />
          <Route path="/contact" element= {<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
