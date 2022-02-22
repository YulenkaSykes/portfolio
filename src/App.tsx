import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Repositories from "./Components/Repositories";
import useThreeJsScene from "./hooks/useThreeJsScene";
import { Header } from "./Styled/Header";
import { StyledLink } from "./Styled/StyledLink";

function App() {
  useThreeJsScene();
  return (
    <BrowserRouter>
      <div className="App">
      <div className="three-render-zone"></div>
        <Header alignItems = "flex-start">
          <StyledLink to={"/"}>Main</StyledLink>
          <StyledLink to={"/repositories"}>Repositories</StyledLink>
        </Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="repositories" element={<Repositories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
