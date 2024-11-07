import React from "react";

function Links() {
  return (
    <div className="md:flex items-center space-x-3 ml-auto">
      <a href="https://linktr.ee/scsconcordia" className="py-2">
        <img
          src="./assets/some_icons/linktree.png"
          className="h-12"
          alt="Linktree"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/scs-concordia"
        className="py-2 px-2"
      >
        <img
          src="./assets/some_icons/linkedin.svg"
          className="h-10"
          alt="Linkedin"
        />
      </a>
      <a href="https://www.instagram.com/scs.concordia" className="py-2 px-2">
        <img
          src="./assets/some_icons/instagram.svg"
          className="h-10"
          alt="Instagram"
        />
      </a>
      <a href="https://www.facebook.com/scsconcordia/" className="py-2 px-2">
        <img
          src="./assets/some_icons/facebook.svg"
          className="h-10"
          alt="Facebook"
        />
      </a>
      <a href="https://discord.com/invite/kafNvVVHeZ" className="py-2 px-2">
        <img
          src="./assets/some_icons/discord.svg"
          className="h-10"
          alt="Discord"
        />
      </a>
    </div>
  );
}
export default Links;
