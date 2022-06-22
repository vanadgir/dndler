import { knex } from "../../config/knexBoot.js";
import BackgroundSeeder from "./BackgroundSeeder.js";

class Seeder {
  static async seed() {
    console.log("seeding backgrounds...");
    await BackgroundSeeder.seed();
    await knex.destroy();
  }
}

export default Seeder;