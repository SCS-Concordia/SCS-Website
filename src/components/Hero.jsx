import React from "react";
import "../index.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex m-8 items-center justify-center gap-x-12">
      {/* Hero text */}

      <div className="relative w-1/2">
        {/* Black text (shadow/border effect) */}
        <h1
          className="font-ibmPlex text-[4.51em] drop-shadow-lg text-black absolute"
          style={{ top: "-2px", left: "-5px" }}
        >
          Software Engineering and Computer Science
        </h1>
        {/* White text */}
        <h1 className="font-ibmPlex text-[4.5em] drop-shadow-lg text-white relative">
          Software Engineering and Computer Science
          <span className="blinker text-gray-200 drop-shadow-lg font-ibmPlex">
            |
          </span>
        </h1>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-5%" }}
        transition={{ duration: 0.7 }}
      >
        <div className="">
          <img
            src="/src/assets/graphics/concbuilding.png"
            className=""
            alt="Concordia Building"
          />
          <a
            className="p-5 m-5 flex w-fit gap-12 justify-between border border-black bg-gray-300 rounded-2xl"
            href="https://scsconcordia.us12.list-manage.com/subscribe?u=4c052a132d5eb23fe2e2712b9&id=22644f4443"
          >
            <p className="font-mono text-xs text-gray-600">
              Sign Up for Our Newsletter
            </p>
            <img src="/src/assets/icons/arrow1.svg"></img>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
