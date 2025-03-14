import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from './pages/Home';
import Footer from "./Footer";
import "/src/styles/App.css";

import DigitalCreator from './pages/DigitalCreator';
import Mechanical from "./pages/Mechanical";
import WebDesign from './pages/WebDesign';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Header is visible on all pages */}
        <Routes>
        <Route path="/" element={<Home />} /> {/* Home page with all sections */}
        <Route path="/mechanical" element={<Mechanical />} /> {/* Dedicated page for Mechanical Engineering */}
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/digital-creator" element={<DigitalCreator />} /> {/* Dedicated page for Digital Creator */}

        </Routes>
        <Footer />


      </div>
    </Router>
   
  );
}

export default App;



