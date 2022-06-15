import React from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import AppBody from "./containers/AppBody";
import Navigation from "./containers/Navigation";
import Clock from "./containers/Clock";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>THE DNDLER</h1>
      </header>
      <BrowserRouter>
        <Navigation />
        <AppBody/>
      </BrowserRouter>
      <hr />
      <Clock />
    </div>
  );
};

export default App;
