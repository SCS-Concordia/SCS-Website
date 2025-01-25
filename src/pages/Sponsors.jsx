import React from "react";
import Sponsor from "../components/Sponsor.jsx";

function Sponsors() {
  return (
    <div className="m-8 text-center items-center justify-center">
      <h1 id="about-section" className="p-4 font-JetBrainsMono drop-shadow-md">
        OUR SPONSORS
      </h1>
      <p>Coming Soon</p>
      {
      // We don't have any at time of commenting this out
      // The code is only half-done since I didn't have one to try
      // <div className="flex items-center justify-center">
      //   <Sponsor size={300} sponsor="../assets/sponsor_graphics/Ubisoft_logo.png" />
      // </div>
      // <div className="flex items-center justify-center">
      //   <Sponsor size={250} />
      //   <Sponsor size={250} />
      // </div>
      // <div className="flex items-center justify-center">
      //   <Sponsor size={200} />
      //   <Sponsor size={200} />
      //   <Sponsor size={200} />
      // </div>
      }
    </div>
  );
}

export default Sponsors;

