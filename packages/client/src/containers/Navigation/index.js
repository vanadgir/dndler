import React from "react";
import OptionButton from "../EventCallers/OptionButton";

const Navigation = (props) => {
  const getDestinations = () => {
    switch (props.curPage) {
      case "Character":
        return ["Home", "Custom"];
      case "Custom":
        return ["Home", "Character"];
      default:
        return ["Character", "Custom"];
    }
  };

  const navigationList = () => {
    let destinations = getDestinations();
    let nav = [];
    for (let i = 0; i < destinations.length; ++i) {
      nav.push(
        <OptionButton
          className={"navButton"}
          label={destinations[i]}
          value={destinations[i]}
          onClick={props.changePage}
          id={destinations[i] + "-button"}
          key={destinations[i]}
        />
      );
    }
    return nav;
  };

  return (
    <React.Fragment>
      <nav className="App-nav">{navigationList()}</nav>
      <hr />
    </React.Fragment>
  );
};

export default Navigation;
