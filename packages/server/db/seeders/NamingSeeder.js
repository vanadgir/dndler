import Naming from "../models/Naming.js";
import { namings } from "./data/SRD/index.js";

class NamingSeeder {
  static async seed() {
    for (const singleNamingCategory in Object.keys(namings)) {
      for (const singleNamingData of singleNamingCategory) {
        const currentNaming = await Naming.query().findOne({
          text: singleNamingData,
          category: singleNamingCategory,
        });
        if (!currentNaming) {
          await Naming.query().insert({
            text: singleNamingData,
            category: singleNamingCategory,
          });
        }
      }
    }
  }
}

export default NamingSeeder;
