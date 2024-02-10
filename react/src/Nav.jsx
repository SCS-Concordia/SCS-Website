import React from "react";
import 'flowbite';

function Nav({ page }) {
  return (
    <nav className="bg-transparent">
      {/* Navbar wrapped in this div below */}
      <div className="flex flex-wrap items-center mx-auto p-2">
        {/* Anchor tag for the SCS logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./assets/icons/scslogo.png" className="h-12 ml-2.5" alt="SCS Logo" />
        </a>
        {/* Button for the mobile menu, it becomes visible thanks to flowbite's inbuilt javascript */}
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {/* Navbar links */}
        <div className="hidden w-full md:block md:w-auto ml-6" id="navbar-default">
          <ul className="font-robotoMono font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-2 md:border-0 md:bg-transparent">
      
            <li>
              <a href="#" className={`block py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0 ${page === 'About' ? 'bg-gray-600' : ''}`} aria-selected={page === 'About'}>ABOUT</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0 ${page === 'Services' ? 'bg-gray-600' : ''}`} aria-selected={page === 'Services'}>SPONSORS</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0 ${page === 'Pricing' ? 'bg-gray-600' : ''}`} aria-selected={page === 'Pricing'}>EVENTS</a>
            </li>
            <li>
              <a href="#" className={`block py-2 px-3 text-white rounded hover:text-gray-600 md:hover:bg-transparent md:border-0 md:p-0 ${page === 'Contact' ? 'bg-gray-600' : ''}`} aria-selected={page === 'Contact'}>ALGOTIME</a>
            </li>
            {/* Social media icons */}
            <div className="flex flex-row gap-5 ml-5">
              <li>
                <a href="#" target="_blank"> 
                  <img src="./assets/some_icons/discord.svg" className="h-8" alt="AlgoTime" />
                </a>
              </li> 
              <li> 
                <a> 
                  <img src="./assets/some_icons/discord.svg" className="h-8" alt="AlgoTime" />
                </a>  
              </li> 
              <li> 
                <a> 
                  <img src="./assets/some_icons/discord.svg" className="h-8" alt="AlgoTime" />
                </a>  
              </li>
              <li>
                <a>
                  <img src="./assets/some_icons/discord.svg" className="h-8" alt="AlgoTime" />
                </a>  
              </li>
            </div>
          </ul>
        </div>
        
        {/* <div className="font-robotoMono font-medium flex flex-row p-4 md:p-0 mt-4 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
          <a>
            <img src="./assets/some_icons/discord.svg" className="h-12 ml-2.5" alt="AlgoTime" />
          </a>
          <a>
            <img src="./assets/some_icons/discord.svg" className="h-12 ml-2.5" alt="AlgoTime" />
          </a>
          <a>
            <img src="./assets/some_icons/discord.svg" className="h-12 ml-2.5" alt="AlgoTime" />
          </a>
          <a>
            <img src="./assets/some_icons/discord.svg" className="h-12 ml-2.5" alt="AlgoTime" />
          </a>
        </div> */}
      </div>
    </nav>
  );
}


export default Nav;
