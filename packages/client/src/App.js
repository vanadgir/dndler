import React from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import AppBody from "./containers/AppBody";
import Navigation from "./containers/Navigation";
import Footer from "./containers/Footer";

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
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
