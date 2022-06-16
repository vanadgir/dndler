import React from "react";
import { NavLink } from "react-router-dom";

const InfoLinks = () => {
  return (
    <ul className="InfoLinks">
      <li>
        <NavLink to="/about"><p>About</p></NavLink>
      </li>
      <li>
        <NavLink to="/legal"><p>Legal</p></NavLink>
      </li>
      <li>
        <a href="https://github.com/vanadgir/dndler/" target="_blank" rel="noreferrer"><p>GitHub</p></a>
      </li>
    </ul>
  )
}

export default InfoLinks;