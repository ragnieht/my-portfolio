import React from "react";
import "./Area.css";
import { FaLinkedin } from "react-icons/fa";
export default function HomeArea() {
  return (
    <div
      id="home"
      className="home container"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 className="name">Theingar Than Wai</h1>
      <p className="about">Self-Taught Software Engineer hungry for growth</p>
    </div>
  );
}
