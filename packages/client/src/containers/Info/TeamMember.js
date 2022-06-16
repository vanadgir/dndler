import React from "react";

const TeamMember = ({ memberInfo }) => {
  return (
    <a className="TeamMember" href={memberInfo.html_url} target="_blank" rel="noreferrer">
        <img src={memberInfo.avatar_url} alt={`${memberInfo.login} avatar`}/>
        <h4>{memberInfo.login}</h4>
        <p>{memberInfo.bio}</p>
      </a>
  )
}

export default TeamMember;