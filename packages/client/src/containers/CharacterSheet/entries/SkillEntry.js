import React from 'react';

const SkillEntry = (props) => {
  return (
    <li className={"individualSkill " + (props.prof ? "proficient" : "")}>
      <p className="skillsTitle inline-block leftAlign">{props.skillName}</p>
      <p className="skillsValue inline-block rightAlign">
        {(props.skillValue > 0 ? "+" : "") + props.skillValue}
      </p>
    </li>
  );
};

export default SkillEntry;