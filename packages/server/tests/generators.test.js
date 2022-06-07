import {
  generateName,
  generateRace,
  generateBackground,
  generateClass,
  generateStats,
  calcHitpoints,
} from "../generators/generateAll.js";

test("function 'generateName()' generates a name as a string", () => {
  let name = generateName();
  expect(name).toBeDefined();
  expect(typeof name).toEqual("string");
  expect(name.length).toBeGreaterThan(1);
});

test('function \'generateRace()\' generates a race as a string', () => {
    let race = generateRace(["Dragonborn", "Half-Orc", "Human", "Half-Elf"])
    expect(race).toBeDefined()
    expect(typeof race).toEqual('string');
    expect(race.length).toBeGreaterThan(1)
});

test('function \'generateBackground()\' generates a background object', () => {
    let background = generateBackground(["Acolyte"])
    expect(background).toBeDefined()
    expect(typeof background).toEqual('object');

    expect(background.Name).toBeDefined()
    expect(background.Name.length).toBeGreaterThan(1)
    expect(typeof background.Name).toEqual('string');

    expect(background.Trait).toBeDefined()
    expect(background.Trait.length).toBeGreaterThan(1)
    expect(typeof background.Trait).toEqual('string');

    expect(background.Ideal).toBeDefined()
    expect(background.Ideal.length).toBeGreaterThan(1)
    expect(typeof background.Ideal).toEqual('string');

    expect(background.Bond).toBeDefined()
    expect(background.Bond.length).toBeGreaterThan(1)
    expect(typeof background.Bond).toEqual('string');

    expect(background.Flaw).toBeDefined()
    expect(background.Flaw.length).toBeGreaterThan(1)
    expect(typeof background.Flaw).toEqual('string');

    expect(background.Gear).toBeDefined()
    expect(background.Gear.length).toBeGreaterThan(1)
    expect(typeof background.Gear).toEqual('object');
    expect(background.Gear[0].length).toBeGreaterThan(1)
    expect(typeof background.Gear[0]).toEqual('string');
});

test("function 'generateClass()' generates a class as a string", () => {
  let classChoice = generateClass([
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
  ]);
  expect(classChoice).toBeDefined();
  expect(typeof classChoice).toEqual("string");
  expect(classChoice.length).toBeGreaterThan(1);
});

test('function \'calcHitpoints()\' generates correct hp', () => {
    expect(calcHitpoints()).toBeDefined()
    expect(typeof calcHitpoints()).toEqual('number');
    expect(calcHitpoints(2, 'Druid', 1)).toEqual(10)
})

test("function 'generateStats()' generates appropriate stats", () => {
  let stats = generateStats(
    generateRace([
      "Dragonborn",
      "Forest Gnome",
      "Half-Orc",
      "Hill Dwarf",
      "Rock Gnome",
      "Human",
      "Mountain Dwarf",
    ])
  );

  expect(stats).toBeDefined();
  expect(typeof stats).toEqual("object");

  Object.keys(stats).forEach((key) => {
    expect(stats[key]).toBeDefined();
    expect(typeof stats[key]).toEqual("object");

    Object.keys(stats[key]).forEach((stat) => {
      expect(stats[key][stat]).toBeDefined();
      expect(typeof stats[key][stat]).toEqual("number");
      expect(stats[key][stat] >= 3 && stats[key][stat] <= 18);
    });
  });
});
