import React from "react";
import "./App.css";

import useThreeJsScene from "./hooks/useThreeJsScene";

function App() {
  useThreeJsScene();

  return (
    <div className="App">
      <div className="three-render-zone"></div>
    </div>
  );
}

export default App;
