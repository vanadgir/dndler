import Language from "../models/Language.js";
import { languages } from "./data/SRD/index.js";

class LanguageSeeder {
  static async seed() {
    for(const singleLanguageData of languages) {
      const currentLanguage = await Language.query().findOne({ title: singleLanguageData });
      if(!currentLanguage) {
        await Language.query().insert({ title: singleLanguageData, description: "DESCRIPTION NEEDED" });
      }
    }
  }
}

export default LanguageSeeder;
