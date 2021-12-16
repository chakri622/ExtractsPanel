import { BrowserRouter } from "react-router-dom";
import React from "react";

import "./App.css";

import HeaderComponent from "./Components/Header/HeaderComponent";


function App() {
  return (
   
      <BrowserRouter>
        <HeaderComponent />
      </BrowserRouter>
    
  );
}

export default App;
