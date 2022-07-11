import Spell from "../models/Spell.js";
import { spells } from "./data/SRD/index.js";

class SpellSeeder {
  static async seed() {
    for (const singleSpellLevel in spells) {
      for (const spellTitle in spells[singleSpellLevel]) {
        const thisSpell = spells[singleSpellLevel][spellTitle];
        const currentSpell = await Spell.query().findOne({
          title: spellTitle,
        });

        if (!currentSpell) {
          delete thisSpell.classes;
          const description = thisSpell.description;
          if (!Array.isArray(description)) {
            thisSpell.description = [description];
          }
          await Spell.query().insert({
            ...thisSpell,
            title: spellTitle,
            level: singleSpellLevel,
          });
        }
      }
    }
  }
}

export default SpellSeeder;
