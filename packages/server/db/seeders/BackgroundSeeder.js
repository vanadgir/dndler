import Background from "../models/Background.js";
import { backgrounds } from "./SRD/data.js";

class BackgroundSeeder {
  static async seed() {
    for (const singleBackgroundData of backgrounds) {
      const currentBackground = await Background.query().findOne(
        singleBackgroundData
      );
      if (!currentBackground) {
        await Background.query().insert(singleBackgroundData);
      }
    }
  }
}

export default BackgroundSeeder;
