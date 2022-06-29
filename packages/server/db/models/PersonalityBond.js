import { Model } from "objection";

import Background from "./Background.js";

class PersonalityBond extends Model {
  static get tableName() {
    return "personalityBonds";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "personalityBonds.backgroundId",
          to: "backgrounds.id",
        },
      },
    };
  }
}

export default PersonalityBond;
