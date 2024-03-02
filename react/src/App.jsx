import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Events from './pages/Events/Events.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-b from-light-purple to-dark-purple min-h-screen'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          {/* Add other routes if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
