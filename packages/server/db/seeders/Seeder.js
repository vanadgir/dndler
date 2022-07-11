import knex from "../../config/knexBoot.js";
import AttributeSeeder from "./AttributeSeeder.js";
import EquipmentSeeder from "./EquipmentSeeder.js";
import FeatureSeeder from "./FeatureSeeder.js";
import LanguageSeeder from "./LanguageSeeder.js";
import MetamagicSeeder from "./MetamagicSeeder.js";
import ProficiencySeeder from "./ProficiencySeeder.js";
import SkillSeeder from "./SkillSeeder.js";
import SpellLevelSeeder from "./SpellLevelSeeder.js";
import SpellSeeder from "./SpellSeeder.js";
import ToolSeeder from "./ToolSeeder.js";
import NamingSeeder from "./NamingSeeder.js";

import ClassSeeder from "./ClassSeeder.js";
// import BackgroundSeeder from "./BackgroundSeeder.js";
// import RaceSeeder from "./RaceSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding attributes...");
    await AttributeSeeder.seed();
    console.log("seeding equipment...");
    await EquipmentSeeder.seed();
    console.log("seeding features...");
    await FeatureSeeder.seed();
    console.log("seeding languages...");
    await LanguageSeeder.seed();
    console.log("seeding metamagics...");
    await MetamagicSeeder.seed();
    console.log("seeding proficiencies...");
    await ProficiencySeeder.seed();
    console.log("seeding skills...");
    await SkillSeeder.seed();
    console.log("seeding spell levels...");
    await SpellLevelSeeder.seed();
    console.log("seeding spells...");
    await SpellSeeder.seed();
    console.log("seeding tools...");
    await ToolSeeder.seed();

    // console.log("seeding CBR...");
    console.log("seeding classes...");
    await ClassSeeder.seed();
    // console.log("seeding subclasses...");
    // await SubclassSeeder.seed();
    // console.log("seeding backgrounds...");
    // await BackgroundSeeder.seed();
    // console.log("seeding races...");
    // await RaceSeeder.seed();
    // console.log("CBR seeded");

    console.log("seeding namings...");
    await NamingSeeder.seed();
    await knex.destroy();
  }
}

export default Seeder;