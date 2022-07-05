import React from "react";
import "./ProjectCard.css";
import ApparelSite from "./ApparelSite.png";
export default function ProjectOne() {
  return (
    <div className="card">
      <div className="left">
        <h1>Apparal E-Commerce Site</h1>
        <p>
          Simple minimal apparel E-commerce web application with the core
          functionalities
        </p>
        <li>State Managment with Redux</li>
        <li>UI Design with ReactJS, Material UI & CSS</li>
        <div className="actionWrapper">
          <div className="actions">
            <button>
              {/* <a
              href="https://github.com/ragnieht/React-Learning/tree/main/shopping-site"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a> */}{" "}
              View Site
            </button>
            <button>
              <a
                href="https://github.com/ragnieht/React-Learning/tree/main/shopping-site"
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
        <img src={ApparelSite} alt="pOneImg" />
      </div>
    </div>
  );
}
