import React from "react";
import "./Area.css";
import ProjectOne from "../Card/ProjectOne";
import ProjectTwo from "../Card/ProjectTwo";

export default function ProjectsArea() {
  return (
    <div id="projects" className="projects container">
      <ProjectOne />
      <ProjectTwo />
    </div>
  );
}
