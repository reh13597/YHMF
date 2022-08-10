import './App.css';
import Header from './components/Header';
import Team from './components/pages/Team';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Header />}>
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App