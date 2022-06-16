import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Collapsible from "../EventCallers/Collapsible";
import OptionButton from "../EventCallers/OptionButton";
import OptionSwitch from "../EventCallers/OptionSwitch";

const CustomOptionsPage = () => {
  const { charOptions: activeOptions, setCharOptions: setActiveOptions, navigateToCharSheet } = useOutletContext();
  const [sources, setSources] = useState({});

  useEffect(() => {
    fetchSources();
  }, []);

  const activeSources = (activeOptionSources) =>
    Object.entries(sources)
      .filter(([key, value]) => activeOptionSources.includes(key))
      .map(([key, value]) => value);

  const flipSwitch = (event, switchType) => {
    let thisList = [...activeOptions[switchType]];

    if (event.target.checked) {
      thisList.push(event.target.id);
    } else {
      thisList = thisList.filter((source) => source !== event.target.id);
    }
    const newObj = {
      Sources: [...activeOptions.Sources],
      Classes: [...activeOptions.Classes],
      Races: [...activeOptions.Races],
      Backgrounds: [...activeOptions.Backgrounds],
      Levels: [...activeOptions.Levels],
      Other: [...activeOptions.Other],
    };

    newObj[switchType] = thisList;

    const newObj2 = {
      Sources: [...newObj.Sources],
      Classes: [
        ...newObj.Classes.filter((cla) =>
          activeSources(newObj.Sources).some((s) => s.Classes.includes(cla))
        ),
      ],
      Races: [
        ...newObj.Races.filter((race) =>
          activeSources(newObj.Sources).some((s) => s.Races.includes(race))
        ),
      ],
      Backgrounds: [
        ...newObj.Backgrounds.filter((background) =>
          activeSources(newObj.Sources).some((s) =>
            s.Backgrounds.includes(background)
          )
        ),
      ],
      Levels: [...newObj.Levels],
      Other: [...newObj.Other],
    };

    setActiveOptions(newObj2);
  };

  const levelChange = (event) => {
    let { value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    const newObj = {
      Sources: [...activeOptions.Sources],
      Classes: [...activeOptions.Classes],
      Races: [...activeOptions.Races],
      Backgrounds: [...activeOptions.Backgrounds],
      Levels:
        event.target.id === "minLevel"
          ? [value, activeOptions.Levels[1]]
          : [activeOptions.Levels[0], value],
      Other: [...activeOptions.Other],
    };

    setActiveOptions(newObj);
  };

  const makeTable = (availableOptionsList, tableName) => {
    return availableOptionsList.map((option, keyIndex) => (
      <OptionSwitch
        tableName={tableName}
        className={"OptionSwitch"}
        key={keyIndex + option.Id}
        id={option.Id}
        value={option.Name}
        handleToggle={(e) => flipSwitch(e, tableName)}
        isOn={activeOptions[tableName].includes(option.Id)}
        readOnly={option.Id === "PHB"}
      >
        <label htmlFor={option.Id} className={option.Id + "-label"}>
          <span className={option.Id + " customOption"}>{option.Name}</span>
        </label>
      </OptionSwitch>
    ));
  };

  const optionCategory = (categoryName) => {
    let dummy = [];
    for (let source of activeOptions["Sources"]) {
      if (sources[source]) {
        for (let subItem in sources[source][categoryName]) {
          dummy.push(sources[source][categoryName][subItem]);
        }
      }
    }
    return dummy.sort();
  };

  const levelRange = (
    <div className="levelRange-container">
      <h5 className="levelRange-title">LEVEL RANGE</h5>
      <div className="levelInput-container">
        <input
          value={activeOptions["Levels"][0]}
          onChange={levelChange}
          type="number"
          min={1}
          max={20}
          id="minLevel"
        />
        <label htmlFor="minLevel" className="level-label">
          <span className="level-span">MIN</span>
        </label>
      </div>
      <div className="levelInput-container">
        <input
          value={activeOptions["Levels"][1]}
          onChange={levelChange}
          type="number"
          min={1}
          max={20}
          id="maxLevel"
        />
        <label htmlFor="maxLevel" className="level-label">
          <span className="level-span">MAX</span>
        </label>
      </div>
    </div>
  );

  const fetchSources = async () => {
    try {
      const response = await fetch("/api/v1/sources");
      if (response.ok) {
        const json = await response.json();
        setSources(json);
      } else throw new Error(`Bad response, response code ${response.status}`);
    } catch (error) {
      console.error(`Sorry, it borked cuz ${error}`);
    }
  };

  return (
    <div className="CustomOptions">
      <Collapsible
        id="sourceCollapsible"
        value="SOURCE MATERIALS"
        collapsed={false}
        category="source"
        labelSpans={["SOURCE MATERIALS"]}
        neverBar={true}
      >
        {makeTable(
          Object.entries(sources).map(([key, value]) => ({
            Id: key,
            Name: value.Name,
          })),
          "Sources"
        )}
      </Collapsible>
      <Collapsible
        id="classCollapsible"
        value="CLASSES"
        collapsed={false}
        category="class"
        labelSpans={["CLASSES"]}
        neverBar={true}
      >
        {makeTable(
          optionCategory("Classes").map((x) => ({ Id: x, Name: x })),
          "Classes"
        )}
      </Collapsible>
      <Collapsible
        id="raceCollapsible"
        value="RACES"
        collapsed={false}
        category="race"
        labelSpans={["RACES"]}
        neverBar={true}
      >
        {makeTable(
          optionCategory("Races").map((x) => ({ Id: x, Name: x })),
          "Races"
        )}
      </Collapsible>
      <Collapsible
        id="optionsCollapsible"
        value="OTHER"
        collapsed={false}
        neverBar={true}
        category="other"
        labelSpans={["OTHER"]}
      >
        <OptionSwitch
          handleToggle={(e) => flipSwitch(e, "Other")}
          value="Weighted Stats"
          className="OptionSwitch"
          id="weighted"
          isOn={true}
        >
          <label htmlFor="weighted" className={"weighted-label"}>
            <span className={"weighted customOption"}>Weighted Stats?</span>
          </label>
        </OptionSwitch>
        {levelRange}
      </Collapsible>
      <OptionButton
        label={"LET'S SEE 'EM"}
        onClick={navigateToCharSheet}
        value={""}
        id={"customRoll"}
        className={"customRoll"}
      />
    </div>
  );
};

export default CustomOptionsPage;
