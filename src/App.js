import React from "react";
import { Route } from "react-router-dom";
import SimpleContainer from "./layout/SimpleContainer";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div>
      <SimpleContainer>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </SimpleContainer>
    </div>
  );
}
