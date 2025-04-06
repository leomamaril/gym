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

function App() {
    return (
        <Router basename="/gym">
            <Navbar />
            <Routes>
               
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;