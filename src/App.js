import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/">
    //       <Header />
    //     </Route>
    //     <Route path="/events">
    //       <Events />
    //     </Route>
    //     <Route path="/team">
    //       <Team />
    //     </Route>
    //     <Route path="/contact">
    //       <Contact />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Home/>
  )
}

export default App