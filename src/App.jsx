import React from 'react';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Events from './pages/Events/Events.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <div className='bg-gradient-to-b from-light-purple to-dark-purple min-h-screen'>
        <Nav />
        <Home />
        <About />
        <Events />
    </div>
  )
}

export default App
