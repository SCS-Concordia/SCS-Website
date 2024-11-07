import React, { useState } from "react";
import Links from "./Links";

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-transparent">
      <div className="max-w-full px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <img
                  src="./assets/icons/scslogo.png"
                  className="h-14 ml-2.5"
                  alt="SCS Logo"
                />
                {/* <span className="font-semibold text-gray-500 text-lg">LOGO</span> */}
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-6 text-lg">
              <a
                href="#about-section"
                className={`block font-robotoMono font-medium py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0`}
              >
                ABOUT
              </a>
              <a
                href="#"
                className={`block font-robotoMono font-medium py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0`}
              >
                SPONSORS
              </a>
              <a
                href="#"
                className={`block font-robotoMono font-medium py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0`}
              >
                EVENTS
              </a>
              <a
                href="#"
                className={`block font-robotoMono font-medium py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0`}
              >
                ALGOTIME
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <Links />

          {/* The following needs to be worked on! */}
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              🍔
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          ABOUT
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          SPONSORS
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          EVENTS
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          ALGOTIME
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          LINKTREE
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          INSTAGRAM
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          Facebook
        </a>
        <a
          href=""
          className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white"
        >
          DISCORD
        </a>
      </div>
    </nav>
  );
}

export default Nav;
