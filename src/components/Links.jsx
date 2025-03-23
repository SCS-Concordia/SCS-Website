import React from "react";

import linktree from "/src/assets/some_icons/linktree.png";
import linkedin from "/src/assets/some_icons/linkedin.svg";
import instagram from "/src/assets/some_icons/instagram.svg";
import facebook from "/src/assets/some_icons/facebook.svg";
import discord from "/src/assets/some_icons/discord.svg";

function Links() {
  return (
    <div className="md:flex items-center space-x-3 ml-auto">
      <a href="https://linktr.ee/scsconcordia" className="py-2">
        <img
          src={linktree}
          className="h-12"
          alt="Linktree"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/scs-concordia"
        className="py-2 px-2"
      >
        <img
          src={linkedin}
          className="h-10"
          alt="Linkedin"
        />
      </a>
      <a href="https://www.instagram.com/scs.concordia" className="py-2 px-2">
        <img
          src={instagram}
          className="h-10"
          alt="Instagram"
        />
      </a>
      <a href="https://www.facebook.com/scsconcordia/" className="py-2 px-2">
        <img
          src={facebook}
          className="h-10"
          alt="Facebook"
        />
      </a>
      <a href="https://discord.com/invite/kafNvVVHeZ" className="py-2 px-2">
        <img
          src={discord}
          className="h-10"
          alt="Discord"
        />
      </a>
    </div>
  );
}
export default Links;
