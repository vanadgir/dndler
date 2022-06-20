import { Model } from 'objection';

class Spell extends Model {
  static get tableName() {
    return "spells";
  }
}

export default Spell;