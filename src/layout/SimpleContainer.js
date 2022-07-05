import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainNavigation from "./MainNavigation";

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <MainNavigation onHomeClick={props.onHomeClick} />
        <main>{props.children}</main>
      </Container>
    </React.Fragment>
  );
}
