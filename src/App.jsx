import React from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Events from "./pages/Events.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-light-purple to-dark-purple min-h-screen">
      <Nav />
      <Home />
      <About />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
