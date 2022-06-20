import { Model } from 'objection';

class Background extends Model {
  static get tableName() {
    return "backgrounds";
  }

  static get relationMappings() {
    return {
      characters: {
        relation: Model.HasManyRelation,
        modelClass: require("./Character.js"),
        join: {
          from: "backgrounds.id",
          to: "characters.backgroundId"
        }
      }
    }
  }
}

export default Background;