// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero long_info={<Home />} />} />
          <Route path='/about' element={<Hero long_info={<About />} />} />
          <Route path='/Education' element={<Hero long_info={<Education />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
