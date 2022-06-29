import knex from "../../config/knexBoot.js";
import AttributeSeeder from "./AttributeSeeder.js";
import FeatureSeeder from "./FeatureSeeder.js";
import BackgroundSeeder from "./BackgroundSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding attributes...");
    await AttributeSeeder.seed();
    console.log("seeding features...");
    await FeatureSeeder.seed();
    // console.log("seeding backgrounds...");
    // await BackgroundSeeder.seed();
    await knex.destroy();
  }
}

export default Seeder;