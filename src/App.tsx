import React from "react";
import "./App.css";

import useThreeJsScene from "./hooks/useThreeJsScene";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";

function App() {
  useThreeJsScene();

  return (
    <BrowserRouter>
      <div className="App">
        <div className="three-render-zone"></div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
