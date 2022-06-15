import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeClassName = "hidden";

  return (
    <nav className="App-nav">
      <NavLink
        to="/character"
        className={({ isActive }) =>
          isActive ? `NavLink ${activeClassName}` : "NavLink"
        }
      >
        <div className="navText-container">
          <span className="navText">Character</span>
        </div>
      </NavLink>
      <NavLink
        to="/custom"
        className={({ isActive }) =>
          isActive ? `NavLink ${activeClassName}` : "NavLink"
        }
      >
        <div className="navText-container">
          <span className="navText">Custom Options</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navigation;
