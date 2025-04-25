// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Pricing from './Pages/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Pages/Footer';
import ScrollToTop from './Pages/ScrollToTop';
import Consultation from './Layouts/Consultation';
import Contact from './Layouts/Contact';
import TrainerBio from './Layouts/About/TrainerBio';
import Workout from './Layouts/Classes/Workout'
function App() {
    return (
        <Router basename="/gym">
            <Navbar />
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/consultation" element={<Consultation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/trainer_bio/:name" element={<TrainerBio />} />
                <Route path="/workout/:classes" element={<Workout />} />

            </Routes>
            <Footer />
        </Router>
       
       
    );
}

export default App;