function mapAbilities(abilities, profThrows) {
  return Object.keys(abilities).reduce((accumulator, current) => {
    return {
      ...accumulator,
      [current.toLowerCase()]: {
        value: abilities[current],
        proficient: profThrows.includes(current) ? 1 : 0,
      },
    };
  }, {});
}

function mapMovement(movement) {
  return Object.keys(movement).reduce((accumulator, current) => {
    return { ...accumulator, [current.toLowerCase()]: movement[current] };
  }, {});
}

function mapAttributes(movement, hitpoints) {
  return {
    movement: mapMovement(movement),
    ac: {
      flat: 10,
    },
    hp: {
      value: hitpoints,
      max: hitpoints,
    },
    init: {
      ability: "dex",
      bonus: 0,
    },
  };
}

function mapBonuses() {
  return {
    abilities: { check: "", save: "", skill: "" },
    msak: { attack: "", damage: "" },
    mwak: { attack: "", damage: "" },
    rsak: { attack: "", damage: "" },
    rwak: { attack: "", damage: "" },
  };
}

function mapCurrency(equipment) {
  return equipment.reduce(
    (accumulator, current) => {
      if (current.includes(" GP")) {
        return {
          ...accumulator,
          gp: accumulator.gp + parseInt(current.split(" GP")[0]),
        };
      } else {
        return accumulator;
      }
    },
    { gp: 0, sp: 0, pp: 0, cp: 0 },
  );
}

function mapDetails(race, background) {
  return {
    race,
    background: background["Name"],
    ideal: background["Ideal"],
    trait: background["Trait"],
    bond: background["Bond"],
    flaw: background["Flaw"],
  };
}

function mapProfSkills(profSkills) {
  return profSkills
    .map((ps) => ps.substring(0, 3).toLowerCase())
    .reduce((newDict, skillName) => {
      return {
        ...newDict,
        [skillName]: {
          value: 1,
        },
      };
    }, {});
}

function mapSpellList(spells) {
  return Object.keys(spells)?.reduce(
    (accumulator, current) => {
      if (current === "spellSlots") {
        return accumulator;
      } else {
        return [
          ...accumulator,
          ...spells[current].map((s) => {
            return { ...s[1], name: s[0] };
          }),
        ];
      }
    },
    [],
  );
}

function mapSpellSlots(spellSlots) {
  // spells: {
  //     // represent slots, not entries
  //     // spell entries are in items
  //     pact: {
  //       value: 0,
  //       override: null,
  //     },
  //     spell1: {
  //       value: 0,
  //       override: null,
  //     },
  //     // ...etc,
  //   },
  return spellSlots?.reduce((accumulator, current, i) => {
    return {
      ...accumulator,
      [i === 0 ? "pact" : `spell${i}`]: {
        value: spellSlots[i],
        override: null,
        max: spellSlots[i],
      },
    };
  }, {});
}

function mapProfTools(profTools) {
  // TODO
  return {};
}

const armorRecord = {
  Light: "lgt",
  Medium: "med",
  Heavy: "hvy",
  Shield: "shel",
};

const weaponRecord = {
  Simple: "sim",
  Martial: "mar",
};

function mapProfTraits(otherProfs) {
  // armorProf: Set("lgt", "med", "hvy", "shel"),
  // ci: Set("diseased", "poisoned", etc), // condition immunities
  // di: Set("fire", "poison", etc), // damage immunities
  // dr: Set("cold", "piercing", etc), // damage resistances
  // dv: Set("force", "bludgeoning", etc), // damage vulnerabilities
  // languages: {
  //   value: Set("Common", "Elvish", etc),
  //   custom: "Rumani; Novani; etc",
  // },
  // size: "med",
  // weaponProf: { value: Set("sim", "mar"), custom: "Ergori bola;
  const armorProf = {
    value: otherProfs["Armor"].map((ap) => armorRecord[ap]),
  };
  const languages = {
    value: otherProfs["Languages"],
  };
  const weaponProf = {
    value: otherProfs["Weapons"].map((wp) => {
      if (wp === "Simple" || wp === "Martial") {
        return weaponRecord[wp];
      } else {
        return wp.toLowerCase();
      }
    }),
  };
  return {
    armorProf,
    languages,
    weaponProf,
  };
}

export function convertForFoundry(data) {
  console.log(data["proficiency"]["Other"]["Tools"]);
  try {
    return {
      abilities: mapAbilities(
        data["stats"]["Total Stats"],
        data["proficiency"]["Proficient Throws"],
      ),
      attributes: mapAttributes(
        mapMovement(data["speed"]),
        data["hitpoints"],
      ),
      bonuses: mapBonuses(),
      charClass: data["class"],
      currency: mapCurrency(data["equipment"]),
      details: mapDetails(data["race"], data["background"]),
      equipment: data["equipment"],
      features: data["features"],
      level: data["level"],
      name: data["name"],
      skills: mapProfSkills(data["proficiency"]["Proficient Skills"]),
      spellList: mapSpellList(data["spells"]),
      spells: mapSpellSlots(data["spells"]["spellSlots"]),
      tools: mapProfTools(data["proficiency"]["Other"]["Tools"]),
      traits: mapProfTraits(data["proficiency"]["Other"]),
    };
  } catch (error) {
    console.error("Error in generateCharacter():", error);
  }
}
