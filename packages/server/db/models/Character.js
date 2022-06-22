import { Model } from "objection";
import Background from "./Background.js";
import Class from "./Class.js";
import Race from "./Race.js";

class Character extends Model {
  static get tableName() {
    return "characters";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "characters.backgroundId",
          to: "backgrounds.id",
        },
      },
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: "characters.classId",
          to: "backgrounds.id",
        },
      },
      race: {
        relation: Model.BelongsToOneRelation,
        modelClass: Race,
        join: {
          from: "characters.raceId",
          to: "backgrounds.id",
        },

      }
    };
  }
}

export default Character;
