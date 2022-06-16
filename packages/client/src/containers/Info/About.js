import React, { useEffect, useState } from "react";
import fetchTeam from "../../helpers/fetchTeam.js";
import TeamMember from "./TeamMember.js";

const About = () => {
  const [team, setTeam] = useState({
    collaborators: [],
    contributors: []
  });

  useEffect(() => {
    fetchTeam(setTeam);
  }, []);

  const collaborators = team.collaborators.map((teamMember) => {
    return <TeamMember memberInfo={teamMember}/>;
  });

  const contributors = team.contributors.map((teamMember) => {
    return <TeamMember memberInfo={teamMember}/>
  });

  return (
    <section className="About">
      <h2>The DNDLER was made by:</h2>
      <div className="teamListing">
        {collaborators}
      </div>
      <h4>With help and support from:</h4>
      <div className="teamListing">
        {contributors}
      </div>
    </section>
  )
}

export default About;