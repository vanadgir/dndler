import { contributors, collaborators } from "../constants/team.js";

const fetchTeam = async (setTeam) => {
  const team = {};
  team.collaborators = await Promise.all(
    collaborators.map((teamMember) => {
      return fetchTeamMember(teamMember);
    })
  );
  team.contributors = await Promise.all(
    contributors.map((teamMember) => {
      return fetchTeamMember(teamMember);
    })
  );
  setTeam(team);
};

const fetchTeamMember = async (memberName) => {
  try {
    const response = await fetch(`https://api.github.com/users/${memberName}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    const teamMember = await response.json();
    return teamMember;
  } catch (error) {
    console.error(error);
  }
};

export default fetchTeam;