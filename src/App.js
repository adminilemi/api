import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Home/LandingPage';
import About from './pages/About/About';
import SubscribePage from './pages/SubscribeForm/SubscribePage';
import ContactUs from './pages/ContactUs/ContactUsPage';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/main-components/Footer';

function App() {
  const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/join-form' element={<SubscribePage />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
