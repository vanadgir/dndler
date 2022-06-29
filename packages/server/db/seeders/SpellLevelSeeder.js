import SpellLevel from "../models/SpellLevel.js";
import { spellLevels } from "./SRD/data.js";

class SpellLevelSeeder {
  static async seed() {
    for (const singleSpellLevel of spellLevels) {
      const currentSpellLevel = await SpellLevel.query().findOne({
        id: singleSpellLevel,
      });
      if (!currentSpellLevel) {
        await SpellLevel.query().insert({ id: singleSpellLevel });
      }
    }
  }
}

export default SpellLevelSeeder;
