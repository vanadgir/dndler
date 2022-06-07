import React from 'react';

const AttributeEntry = (props) => {
  return (
    <div className={`${props.shortKey} attributeEntry`}>
      <h4 className="attributeTitle">{props.title}</h4>
      <p className="attributeValue">{props.statTotal}</p>
      <p className="attributeMod">{props.statModifier}</p>
  </div>
  )
}

export default AttributeEntry;