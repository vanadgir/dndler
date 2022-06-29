import { Model } from "objection";

import Background from "./Background.js";

class PersonalityIdeal extends Model {
  static get tableName() {
    return "personalityIdeals";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "personalityIdeals.backgroundId",
          to: "backgrounds.id",
        },
      },
    };
  }
}

export default PersonalityIdeal;
