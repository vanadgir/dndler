const url = "http://localhost:8000/api/v2/options";

// Default character options
const defaultCharOptions = {
  Sources: ["SRD"],
  Classes: [],
  Races: [],
  Backgrounds: [],
  Levels: [1, 20],
  Other: ["weighted"],
};

async function generateCharacterWithOptions(html) {
  defaultCharOptions.Sources = html
    .find('input[name="sourceSRD"]:checked')
    .map((_, el) => el.value)
    .get();
  defaultCharOptions.Classes = html
    .find('input[name^="class"]:checked')
    .map((_, el) => el.value)
    .get();
  defaultCharOptions.Races = html
    .find('input[name^="race"]:checked')
    .map((_, el) => el.value)
    .get();
  defaultCharOptions.Backgrounds = html
    .find('input[name^="background"]:checked')
    .map((_, el) => el.value)
    .get();
  defaultCharOptions.Levels = [
    parseInt(html.find('input[name="levelMin"]').val()),
    parseInt(html.find('input[name="levelMax"]').val()),
  ];
  defaultCharOptions.Other = html
    .find('input[name="otherWeighted"]:checked')
    .map((_, el) => el.value)
    .get();

  console.log("Final Character Options:", defaultCharOptions);

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(defaultCharOptions),
    });
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
          const featureItem = game.items.find(
            (i) => i.name === compendiumFeatures.index.get(key).name
          );
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
    console.error("Error:", error);
  }
}

new Dialog({
  title: "Character Options",
  content: `
    <form>
      <p>Select Sources:</p>
      <label><input type="checkbox" name="sourceSRD" value="SRD" checked> SRD</label><br>

      <p>Select Classes:</p>
      <label><input type="checkbox" name="classFighter" value="Fighter"> Fighter </label><br>
      <label><input type="checkbox" name="classWizard" value="Wizard"> Wizard </label><br>
      <label><input type="checkbox" name="classSorcerer" value="Sorcerer"> Sorcerer </label><br>
      <label><input type="checkbox" name="classMonk" value="Monk"> Monk </label><br>
      <label><input type="checkbox" name="classWarlock" value="Warlock"> Warlock </label><br>
      <label><input type="checkbox" name="classBard" value="Bard"> Bard </label><br>
      <label><input type="checkbox" name="classRanger" value="Ranger"> Ranger </label><br>
      <label><input type="checkbox" name="classPaladin" value="Paladin"> Paladin </label><br>
      <label><input type="checkbox" name="classBarbarian" value="Barbarian"> Barbarian </label><br>
      <label><input type="checkbox" name="classCleric" value="Cleric"> Cleric </label><br>
      <label><input type="checkbox" name="classRogue" value="Rogue"> Rogue </label><br>
      <label><input type="checkbox" name="classDruid" value="Druid"> Druid </label><br>

      <p>Select races:</p>
      <label><input type="checkbox" name="raceHuman" value="Human">Human</label><br>
      <label><input type="checkbox" name="raceHillDwarf" value="Hill Dwarf">Hill Dwarf</label><br>

      <p>Select backgrounds:</p>
      <label><input type="checkbox" name="backgroundAcolyte" value="Acolyte"> Acolyte</label><br>

      <p>Select other options:</p>
      <label>Levels: <input type="number" name="levelMin" value="${defaultCharOptions.Levels[0]}"> to <input type="number" name="levelMax" value="${defaultCharOptions.Levels[1]}"></label><br>
      <label><input type="checkbox" name="otherWeighted" value="weighted" checked> Weighted</label>
    </form>
  `,
  buttons: {
    submit: {
      label: "Submit",
      callback: generateCharacterWithOptions,
    },
    cancel: {
      label: "Cancel",
    },
  },
  default: "submit",
}).render(true);
