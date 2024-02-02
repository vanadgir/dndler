const MIN_CR = 0;
const MAX_CR = 20;
const MAX_COUNT = 5;

function getMonstersByCR(html) {
  const min = Math.min(html.find('input[name="levelMin"]').val(), MAX_CR);
  const max = Math.max(html.find('input[name="levelMax"]').val(), MIN_CR);

  const monsters = game.actors
    .filter(
      (i) =>
        i.type === "npc" &&
        i.system?.details?.cr >= min &&
        i.system?.details?.cr <= max
    )
    .sort((a, b) => {
        if (a.system.details.cr !== b.system.details.cr) {
            return a.system.details.cr - b.system.details.cr;
        } else {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        }
    });
  // return monsters[Math.floor(Math.random() * monsters.length)];
  return monsters;
}

function createCRHeader(cr) {
    return `<h3>CR ${cr} Creatures</h3>`;
}

function createCheckBoxForMonster(monster) {
    return `<label><img src=${monster.img} width="36" height="36"/>${monster.name}<input type="checkbox" name="${monster.name.replace(' ', '_')}"/></label><br/>`;
}

async function getMonstersToSpawn(html) {
    const numberOfMins = html.find('input[name="numMins"]').val();
    const inputs = html.find('input[type="checkbox"]');
    const monstersToAdd = [];
    inputs.each(i => {
        if (inputs[i].checked === true) {
            monstersToAdd.push(inputs[i].name.replace("_", " "));
        }
    })
    console.log(monstersToAdd);
    for (i = 0; i < numberOfMins; ++i) {
        const randomMonsterName = monstersToAdd[Math.floor(Math.random() * monstersToAdd.length)];
        const monster = game.actors.find(a => a.type === "npc" && a.name === randomMonsterName);
        if(monster !== undefined) {
            await createTokenFromMonster(monster, {x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)});
        } else {
            console.error("nob");
        }
    }
}

async function createTokenFromMonster(monster, position = {x: 0, y: 0}) {
    const tokenData = monster.prototypeToken.toObject();
    tokenData.actorId = monster.id;
    tokenData.x = position.x * canvas.scene.grid.size;
    tokenData.y = position.y * canvas.scene.grid.size;
    await canvas.scene.createEmbeddedDocuments('Token', [tokenData]);
}

new Dialog({
  title: "Get Monsters By CR",
  content: `
      <form>
        <label>Level Range: <input type="number" name="levelMin" value="${MIN_CR}"> to <input type="number" name="levelMax" value="${MAX_CR}"></label><br>
      </form>
    `,
  buttons: {
    submit: {
      label: "Submit",
      callback: (html) => {
        const monsters = getMonstersByCR(html);
        console.log(monsters);
        const inputMap = monsters.reduce((prev, cur, i) => {
            if(i > 0 && monsters[i - 1].system.details.cr < cur.system.details.cr) {
                return [...prev, "<hr/>", createCRHeader(cur.system.details.cr), createCheckBoxForMonster(cur)];
            } else {
                return [...prev, createCheckBoxForMonster(cur)]
            }
        }, [createCRHeader(monsters[0].system.details.cr)]);
        new Dialog({
          title: "Select Monsters",
          content: `
                    <form>
                    <label>Num Mins: <input type="number" name="numMins" value="${MAX_COUNT}"/></label><br>
                        ${inputMap.join("")}
                    </form>`,
          buttons: {
            submit: {
              label: "Submit",
              callback: getMonstersToSpawn,
            },
          },
        }).render(true);

      },
    },
    cancel: {
      label: "Cancel",
    },
  },
  default: "submit",
}).render(true);
