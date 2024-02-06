async function fetchDndler() {
  const url = "http://localhost:8000/api/v2/nuddermin";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error("Error fetching data", e);
  }
}

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

function getCurrency(equipment) {
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

function getCharClass(className) {
  return game.items.find((i) => i.name === className).toObject();
}

function mapClassFeatures(c, level) {
  c.system.levels = level;
  c.system.hitDice = `${level}${c.system.hitDice}`;
  const compendiumFeatures = game.packs.get("dnd5e.classfeatures");
  return c.system.advancement
    .filter(
      (cf) =>
        cf.level !== undefined &&
        cf.level > 0 &&
        cf.level <= level &&
        cf.title === "Features",
    )
    .reduce(
      (items, cf) => [
        ...items,
        ...cf.configuration.items.map((i) => {
          const key = i.split("classfeatures.")[1];
          return game.items
            .find((i) => i.name === compendiumFeatures.index.get(key).name)
            .toObject();
        }),
      ],
      [],
    );
}

async function mapInventory(equipment) {
  return equipment
    .map((e) => {
      let quantity;
      if (e.includes(" (")) {
        quantity = e.split(" (")[1].split(")")[0];
        e = e.split(" (")[0];
      }
      const item = game.items.find((i) => i.name === e)?.toObject();
      if (item !== undefined && quantity !== undefined) {
        item.system.quantity = quantity;
      }
      return item;
    })
    .filter((e) => e !== undefined);
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

function mapProfTools(profTools) {
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

async function createActor(
  abilities,
  attributes,
  bonuses,
  currency,
  details,
  items,
  name,
  skills,
  tools,
  traits,
) {
  try {
    await Actor.implementation.create({
      items, // this represents foundryVTT 'items',
      // ie spells, features, in-game items, etc.
      name: `DNDLER: ${name}`,
      type: "character",
      prototypeToken: {
        name: name,
      },
      system: {
        abilities,
        attributes,
        bonuses,
        currency,
        details,
        skills,
        tools,
        traits,
        spells: {
          // represent slots, not entries
          // spell entries are in items
          pact: {
            value: 0,
            override: null,
          },
          spell1: {
            value: 0,
            override: null,
          },
          // ...etc,
        },
      },
    });
  } catch (e) {
    console.error("Error creating FoundryVTT Actor:", e);
  }
}

async function generateCharacter() {
  try {
    const data = await fetchDndler();

    const abilities = mapAbilities(
      data["stats"]["Total Stats"],
      data["proficiency"]["Proficient Throws"],
    );
    const attributes = mapAttributes(
      mapMovement(data["speed"]),
      data["hitpoints"],
    );
    const bonuses = mapBonuses();
    const currency = getCurrency(data["equipment"]);
    const details = mapDetails(data["race"], data["background"]);

    const charClass = getCharClass(data["class"]);
    const classFeatures = mapClassFeatures(charClass, data["level"]);
    const inventory = await mapInventory(data["equipment"]);
    const items = [charClass, ...classFeatures, ...inventory];

    const profSkills = mapProfSkills(data["proficiency"]["Proficient Skills"]);
    const profTools = mapProfTools(data["proficiency"]["Other"]["Tools"]);
    const profTraits = mapProfTraits(data["proficiency"]["Other"]);

    await createActor(
      abilities,
      attributes,
      bonuses,
      currency,
      details,
      items,
      data["name"],
      profSkills,
      profTools,
      profTraits,
    );
  } catch (error) {
    console.error("Error in generateCharacter():", error);
  }
}

generateCharacter();
