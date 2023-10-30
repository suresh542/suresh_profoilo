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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

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
