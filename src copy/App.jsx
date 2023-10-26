

import './App.scss'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Hero long_info = {<Home />} />} />
      <Route path='/about' element = {<Hero long_info = {<About />} />} />
      <Route path='/resume' element = {<Hero long_info = {<Resume />} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

{/* <Hero long_info = {<Home />} /> */}
{/* <Hero long_info = {<About />} /> */}