import React from "react";

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
        src="/src/assets/graphics/sponsordrop.png"
      />
    </div>
  );
}

export default Sponsor;


