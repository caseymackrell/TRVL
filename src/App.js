import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'

import Book from './components/pages/book/Book';
import AboutPage from './components/pages/about/About';
import TripConfirmation from './components/tripConfirmation/tripConfirmation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<AboutPage />}/>
        <Route path='/book' element = {<Book />}/>
        <Route path='/trip' element = {<TripConfirmation />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
