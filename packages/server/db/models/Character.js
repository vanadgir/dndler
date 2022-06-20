import { Model } from 'objection';

class Character extends Model {
  static get tableName() {
    return "characters";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.HasOneRelation,
      }
    }
  }
}

export default Character;