async function generateCharacter() {
  const url = "http://localhost:8000/api/v2/nuddermin";

  try {
    const response = await fetch(url);
    const data = await response.json();

    const charAbilities = data["stats"]["Total Stats"];
    const charProfThrows = data["proficiency"]["Proficient Throws"];
    const charClass = game.items
      .find((i) => i.name === data["class"])
      .toObject();
    const level = data["level"];
    charClass.system.levels = level;
    charClass.system.hitDice = `${level}${charClass.system.hitDice}`;
    const compendiumFeatures = game.packs.get("dnd5e.classfeatures");
    const classFeatures = [];
    charClass.system.advancement
      .filter(
        (cf) =>
          cf.level !== undefined &&
          cf.level > 0 &&
          cf.level <= level &&
          cf.title === "Features"
      )
      .forEach((cf) =>
        cf.configuration.items.forEach((i) => {
          const key = i.split("classfeatures.")[1];
          const featureItem = game.items.find(i => i.name === compendiumFeatures.index.get(key).name);
          classFeatures.push(featureItem.toObject());
        })
      );

    await Actor.implementation.create({
      name: data.name,
      type: "character",
      prototypeToken: {
        name: data.name,
      },
      items: [charClass, ...classFeatures],
      system: {
        abilities: {
          str: {
            value: charAbilities["STR"],
            proficient: charProfThrows.includes("STR") ? 1 : 0,
          },
          dex: {
            value: charAbilities["DEX"],
            proficient: charProfThrows.includes("DEX") ? 1 : 0,
          },
          con: {
            value: charAbilities["CON"],
            proficient: charProfThrows.includes("CON") ? 1 : 0,
          },
          int: {
            value: charAbilities["INT"],
            proficient: charProfThrows.includes("INT") ? 1 : 0,
          },
          wis: {
            value: charAbilities["WIS"],
            proficient: charProfThrows.includes("WIS") ? 1 : 0,
          },
          cha: {
            value: charAbilities["CHA"],
            proficient: charProfThrows.includes("CHA") ? 1 : 0,
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
          },
        },
        bonuses: {},
        currency: {},
        details: {
          race: data.race,
          background: data["background"]["Name"],
          ideal: data["background"]["Ideal"],
          trait: data["background"]["Trait"],
          bond: data["background"]["Bond"],
          flaw: data["background"]["Flaw"],
        },
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

generateCharacter();