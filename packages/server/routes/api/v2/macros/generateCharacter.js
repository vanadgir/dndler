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
    value: new Set(otherProfs["Armor"].map((ap) => armorRecord[ap])),
  };
  const languages = {
    value: new Set(...otherProfs["Languages"]),
  };
  const weaponProf = {
    value: new Set(
      ...otherProfs["Weapons"].map((wp) => {
        if (wp === "Simple" || wp === "Martial") {
          return weaponRecord[wp];
        } else {
          return wp.toLowerCase();
        }
      })
    ),
  };
  return {
    armorProf,
    languages,
    weaponProf,
  };
}

function mapMovement(movement) {
  return Object.keys(movement).reduce((accumulator, current) => {
    return { ...accumulator, [current.toLowerCase()]: movement[current] };
  }, {});
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
        cf.title === "Features"
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
      []
    );
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
    { gp: 0, sp: 0, pp: 0, cp: 0 }
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

async function createActor(
  name,
  data,
  background,
  abilities,
  profSkills,
  profThrows,
  profTools,
  profTraits,
  movement,
  currency,
  items
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
        abilities: {
          str: {
            value: abilities["STR"],
            proficient: profThrows.includes("STR") ? 1 : 0,
          },
          dex: {
            value: abilities["DEX"],
            proficient: profThrows.includes("DEX") ? 1 : 0,
          },
          con: {
            value: abilities["CON"],
            proficient: profThrows.includes("CON") ? 1 : 0,
          },
          int: {
            value: abilities["INT"],
            proficient: profThrows.includes("INT") ? 1 : 0,
          },
          wis: {
            value: abilities["WIS"],
            proficient: profThrows.includes("WIS") ? 1 : 0,
          },
          cha: {
            value: abilities["CHA"],
            proficient: profThrows.includes("CHA") ? 1 : 0,
          },
        },
        attributes: {
          ac: {
            flat: 10,
          },
          hp: {
            value: data["hitpoints"],
            max: data["hitpoints"],
          },
          init: {
            ability: "dex",
            bonus: 0,
          },
          movement,
        },
        bonuses: {
          abilities: { check: "", save: "", skill: "" },
          msak: { attack: "", damage: "" },
          mwak: { attack: "", damage: "" },
          rsak: { attack: "", damage: "" },
          rwak: { attack: "", damage: "" },
        },
        currency,
        details: {
          race: data.race,
          background: background["Name"],
          ideal: background["Ideal"],
          trait: background["Trait"],
          bond: background["Bond"],
          flaw: background["Flaw"],
        },
        skills: profSkills,
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
        tools: profTools,
        traits: profTraits,
      },
    });
  } catch (e) {
    console.error("Error creating FoundryVTT Actor:", e);
  }
}

async function generateCharacter() {
  try {
    const data = await fetchDndler();

    const background = data["background"];
    const abilities = data["stats"]["Total Stats"];
    const profThrows = data["proficiency"]["Proficient Throws"];
    const profSkills = mapProfSkills(data["proficiency"]["Proficient Skills"]);
    const profTools = mapProfTools(data["proficiency"]["Other"]["Tools"]);
    const profTraits = mapProfTraits(data["proficiency"]["Other"]);
    const movement = mapMovement(data["speed"]);
    const charClass = getCharClass(data["class"]);
    const classFeatures = mapClassFeatures(charClass, data["level"]);
    const currency = getCurrency(data["equipment"]);
    const inventory = await mapInventory(data["equipment"]);
    console.log(inventory);
    const items = [charClass, ...classFeatures, ...inventory];

    await createActor(
      data["name"],
      data,
      background,
      abilities,
      profSkills,
      profThrows,
      profTools,
      profTraits,
      movement,
      currency,
      items
    );
  } catch (error) {
    console.error("Error in generateCharacter():", error);
  }
}

generateCharacter();
