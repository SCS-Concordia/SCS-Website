import React from "react";

import drop from "/src/assets/graphics/sponsordrop.png";

function Sponsor({ size, sponsor }) {
  return (
    <div>
    {
      // <img 
      //   className="m-4"
      //   width={size}
      //   height={size}
      //   src={sponsor}
      // />
    }
    <img 
        className="m-4"
        width={size}
        height={size}
        src={drop}
      />
    </div>
  );
}

export default Sponsor;


