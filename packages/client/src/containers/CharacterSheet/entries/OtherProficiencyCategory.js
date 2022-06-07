const OtherProficiencyCategory = (props) => {
  const proficiencyList = props.entries.map((entry) => {
    return (
      <li className="innerProfEntry leftAlign" key={entry}>
        {entry}
      </li>
    )
  })

  return (
    <li className="proficiencyEntry">
      <h4 className="proficiencyEntryHeader leftAlign">{props.category}</h4>
      <ul className="proficiencyEntries">{proficiencyList}</ul>
    </li>
  );
};

export default OtherProficiencyCategory;
