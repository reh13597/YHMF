import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/events" element={ <Events /> }/>
        <Route path="/team" element={ <Team /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App