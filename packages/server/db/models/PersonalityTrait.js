import { Model } from "objection";

import Background from "./Background.js";

class PersonalityTrait extends Model {
  static get tableName() {
    return "personalityTraits";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "personalityTraits.backgroundId",
          to: "backgrounds.id",
        },
      },
    };
  }
}

export default PersonalityTrait;
