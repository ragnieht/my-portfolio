import React, { useState } from "react";
import "./Area.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box, Modal, Tooltip } from "@mui/material";
import { Button } from "antd";

const style = {
  position: "fixed",
  left: "50%",
  top: "10%",
  transform: "translate(-50%, 50%)",
  width: 500,
  border: "2px solid #000",
  bgcolor: "background.paper",
  boxShadow: 50,
  p: 4,
  borderRadius: "3rem",
};

export default function HomeArea() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
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
      <div className="btmLine">
        <Button onClick={handleOpen}>About</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h2>About Me</h2>
            <p>
              I am currently expanding my knowledge in Front-End Web Development
              with plans to further dive into becoming a Full-Stack Web
              Developer.
            </p>
            <p>
              Learning new libraries/languages/techniques only fuels my passion
              to become a highly-skilled Full-Stack Developer.
            </p>
          </Box>
        </Modal>
        <a
          href="https://www.linkedin.com/in/theingar-than-wai-2450a421a/"
          target="_blank"
          rel="noreferrer"
        >
          <Tooltip title="Check out my LinkedIn profile" arrow>
            <LinkedInIcon id="icon" fontSize="large" />
          </Tooltip>
        </a>

        <a href="http://github.com/ragnieht" target="_blank" rel="noreferrer">
          <Tooltip title="Check out my GitHub profile" arrow>
            <GitHubIcon id="icon" fontSize="large" />
          </Tooltip>
        </a>

        <Tooltip title="+65 96612176" arrow>
          <LocalPhoneIcon id="icon" fontSize="large" />
        </Tooltip>
      </div>
    </div>
  );
}
