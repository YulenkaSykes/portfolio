import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <p>Hello</p>
      <Routes>
      <Route path="/" element={<Main />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
