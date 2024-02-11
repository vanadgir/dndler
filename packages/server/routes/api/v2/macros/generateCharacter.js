async function fetchDndler() {
  const url = "http://localhost:8000/api/v2/foundry";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error("Error fetching data", e);
  }
}

function getCharClass(className, level) {
  const charClass = game.items.find((i) => i.name === className).toObject();
  charClass.system.levels = level;
  charClass.system.hitDice = `${level}${charClass.system.hitDice}`;
  return charClass;
}

async function getFeatures(features, background) {
  const featureFolder = game.folders.find((f) => f.name === "Features") ??
    await Folder.implementation.create({ name: "Features", type: "Item" });

  const featureList = await Promise.all(
    Object.values(features).map(async (f) => {
      const feature = game.items.find((i) =>
        i.name === f.Name && i.type === "feat"
      )?.toObject();
      if (feature !== undefined) {
        return feature;
      } else {
        const newFeature = await Item.implementation.create({
          name: f.Name,
          type: "feat",
          folder: featureFolder._id,
          system: {
            description: {
              value: `<p>${
                Array.isArray(f.Description)
                  ? f.Description.join("")
                  : f.Description
              }</p>`,
            },
          },
        });
        return newFeature.toObject();
      }
    }),
  );

  const backgroundFeature = game.items.find((i) => i.name === background)
    ?.toObject();
  return [...featureList, backgroundFeature];
}

function getSpells(spells) {
  return spells.map((s) =>
    game.items.find((i) => i.name === s.name && i.type === "spell")?.toObject()
  ).filter((
    s,
  ) => s !== undefined);
}

function getInventory(equipment) {
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

async function createActor({
  abilities,
  attributes,
  bonuses,
  currency,
  details,
  items,
  name,
  skills,
  spells,
  tools,
  traits,
}) {
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
        spells,
      },
    });
  } catch (e) {
    console.error("Error creating FoundryVTT Actor:", e);
  }
}

async function generateCharacter() {
  try {
    const data = await fetchDndler();

    const charClass = getCharClass(data["charClass"], data["level"]);
    const features = await getFeatures(
      data["features"],
      data["details"]["background"],
    );
    const spells = getSpells(data["spellList"]);
    const inventory = getInventory(data["equipment"]);

    const actorData = {
      ...data,
      items: [
        charClass,
        ...features,
        ...spells,
        ...inventory,
      ],
    };

    await createActor(actorData);
  } catch (error) {
    console.error("Error in generateCharacter():", error);
  }
}

generateCharacter();
