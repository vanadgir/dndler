import React from "react";
import OptionSwitch from "./OptionSwitch";

const Collapsible = (props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(props.collapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const labelSpanList = props.labelSpans
    ? props.labelSpans.map((labelSpan) => {
        return (
          <span key={labelSpan} className={props.category + "-text"}>
            {labelSpan}
          </span>
        )
      })
    : null;

  return (
    <>
      <OptionSwitch
        containerName="catCollapseCont"
        handleToggle={toggleCollapse}
        className={
          props.category +
          "-option " +
          (isCollapsed ? "collapsed" : "expanded") +
          " optionSwitch-container categoryCollapse"
        }
        id={props.id}
        value={props.value}
        checked={!props.collapsed}
        isOn={!props.collapsed}
      >
        <label htmlFor={props.id} className={props.category + "-label"}>
          {labelSpanList}
        </label>
      </OptionSwitch>
      <hr
        className="faded"
        style={{ display: isCollapsed && !props.neverBar ? "block" : "none" }}
      />
      <div
        className={`options-table ${
          props.category
        }-table collapse-content category ${
          isCollapsed ? "collapsed" : "expanded"
        }`}
      >
        {props.children}
      </div>
      <hr
        style={{ display: !isCollapsed && !props.neverBar ? "block" : "none" }}
      />
    </>
  );
};

export default Collapsible;
