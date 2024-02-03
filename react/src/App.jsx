import React from 'react';
import Home from './pages/Home/Home.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <div className='bg-gradient-to-b from-light-purple to-dark-purple min-h-screen'>
        <Nav />
        <Home />
    </div>
  )
}

export default App