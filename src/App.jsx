import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-light-purple to-dark-purple min-h-screen">
      <Nav />
      <Home />
      <About />
      <Events />
    </div>
  );
}

export default App;
