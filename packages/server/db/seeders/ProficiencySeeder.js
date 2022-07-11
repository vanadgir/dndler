import Proficiency from "../models/Proficiency.js";
import { proficiencies } from "./data/SRD/index.js";

class ProficiencySeeder {
  static async seed() {
    for (const singleProficiencyCategory of Object.keys(proficiencies)) {
      for (const singleProficiencyData of proficiencies[singleProficiencyCategory]) {
        const currentProficiency = await Proficiency.query().findOne({
          category: singleProficiencyCategory,
          title: singleProficiencyData,
        });
        if (!currentProficiency) {
          await Proficiency.query().insert({ category: singleProficiencyCategory, title: singleProficiencyData });
        }
      }
    }
  }
}

export default ProficiencySeeder;
