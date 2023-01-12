import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'

import Book from './components/pages/book/Book';
import AboutPage from './components/pages/about/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/about' element = {<AboutPage />}/>
        <Route path='/book' element = {<Book />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
