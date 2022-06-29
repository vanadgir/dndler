import { Model } from "objection";

class SpellLevel extends Model {
  static get tableName() {
    return "spellLevels";
  }
}

export default SpellLevel;
