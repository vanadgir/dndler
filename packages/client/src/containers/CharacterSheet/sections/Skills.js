import React, { useContext } from "react";
import characterContext from "../../../contexts/characterContext";
import SkillEntry from "../entries/SkillEntry";
import Collapsible from "../../EventCallers/Collapsible";

const CharacterSkills = () => {
  const skillObject = useContext(characterContext).proficiency;

  const skillsMap = Object.keys(skillObject.Skills).map((skill) => {
    return (
      <SkillEntry
        key={skill}
        skillName={skill}
        skillValue={skillObject.Skills[skill]}
        prof={skillObject["Proficient Skills"].includes(skill)}
      />
    );
  });

  return (
    <Collapsible
      id="characterSkills"
      value="characterSkills"
      labelSpans={["SKILLS"]}
      neverBar={true}
      category="characterSkills"
      collapsed={false}
    >
      <section className="characterSkillSection">
        <ul className="characterSkills no-dec">{skillsMap}</ul>
      </section>
    </Collapsible>
  );
};

export default CharacterSkills;
