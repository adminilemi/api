
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SubscribePage from './pages/SubscribePage';
import About from './pages/about/About';

import ContactUs from './pages/ContactUsPage';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/join-form' element={<SubscribePage/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
      
          </Routes>
      </Router>
    </div>
  );
}

export default App;
