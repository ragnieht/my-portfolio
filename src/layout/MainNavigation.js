import React from "react";
import "./MainNavigation.css";
import HomeIcon from "@mui/icons-material/Home";
import ScrollIntoView from "react-scroll-into-view";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
export default function MainNavigation(props) {
  return (
    <div className="nav-bar">
      <nav>
        <div className="iconHome">
          <ScrollIntoView selector="#home">
            <HomeIcon
              className="nav-bar-icons"
              fontSize="large"
              color="inherit"
            />
            <div className="navLabel">
              <h2>Home</h2>
            </div>
          </ScrollIntoView>
        </div>
        <div className="iconSkills">
          <ScrollIntoView selector="#skills">
            <ElectricBoltOutlinedIcon
              className="nav-bar-icons"
              fontSize="large"
              color="inherit"
            />
            <div className="navLabel">
              <h2>Skills</h2>
            </div>
          </ScrollIntoView>
        </div>
        <div className="iconProjects">
          <ScrollIntoView selector="#projects">
            <DynamicFeedOutlinedIcon
              className="nav-bar-icons"
              fontSize="large"
              color="inherit"
            />
            <div className="navLabel">
              <h2>Projects</h2>
            </div>
          </ScrollIntoView>
        </div>
      </nav>
    </div>
  );
}
