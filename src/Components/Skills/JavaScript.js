import React from "react";

import JSLogo from "./images/JSLogo.png";
import "./Skills.css";

export default function JavaScript() {
  return (
    <div className="skillsContainer JS">
      <div className="jsLogo">
        <img src={JSLogo} alt="JSLogo" />
        <p>JAVASCRIPT</p>
      </div>
    </div>
  );
}
