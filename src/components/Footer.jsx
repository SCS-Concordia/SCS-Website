import React from "react";
import Links from "./Links";

function Footer() {
  return (
    <nav className="bg-light-green">
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
    </nav>
  );
}

export default Footer;
