import { Model } from "objection";

import Background from "./Background.js";

class PersonalityFlaw extends Model {
  static get tableName() {
    return "personalityFlaws";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "personalityFlaws.backgroundId",
          to: "backgrounds.id",
        },
      },
    };
  }
}

export default PersonalityFlaw;
