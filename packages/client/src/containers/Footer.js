import React from "react";
import Clock from "./Clock";
import InfoLinks from "./Navigation/InfoLinks";

const Footer = () => {
  return (
    <footer>
      <InfoLinks/>
      <Clock />
      <p>THE DNDLER</p>
    </footer>
  )
}

export default Footer;