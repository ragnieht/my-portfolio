import React from "react";
import Wip from "./Wip.png";
export default function ProjectTwo() {
  return (
    <div className="card">
      <div className="left">
        <h1>Food Ordering Store</h1>
        <p>
          Helping a friend's family business to build a simple website
          displaying their menu and eventually adding an ordering functionality
          linked to their mobile phones
        </p>
        <li>-</li>
        <li>-</li>
        <div className="actionWrapper">
          <div className="actions">
            <button>
              <a href="-" target="_blank" rel="noreferrer">
                View Site
              </a>
            </button>
            <button>
              <a
                href="https://github.com/ragnieht/food-ordering"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={Wip} alt="pOneImg" style={{ width: "19vw" }} />
      </div>
    </div>
  );
}
