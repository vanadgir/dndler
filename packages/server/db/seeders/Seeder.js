import knex from "../../config/knexBoot.js";
import AttributeSeeder from "./AttributeSeeder.js";
import FeatureSeeder from "./FeatureSeeder.js";
// import BackgroundSeeder from "./BackgroundSeeder.js";
import SpellLevelSeeder from "./SpellLevelSeeder.js";
import SkillSeeder from "./SkillSeeder.js";
import SpellSeeder from "./SpellSeeder.js";
import EquipmentSeeder from "./EquipmentSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding attributes...");
    await AttributeSeeder.seed();
    console.log("seeding features...");
    await FeatureSeeder.seed();
    console.log("seeding spell levels...");
    await SpellLevelSeeder.seed();
    console.log("seeding spells...");
    await SpellSeeder.seed();
    console.log("seeding skills...");
    await SkillSeeder.seed();
    console.log("seeding equipment...");
    await EquipmentSeeder.seed();
    // console.log("seeding backgrounds...");
    // await BackgroundSeeder.seed();
    await knex.destroy();
  }
}

export default Seeder;