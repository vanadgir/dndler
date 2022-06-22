import { Model } from "objection";

import Background from "./Background.js";
import Proficiency from "./Proficiency.js";

class BackgroundProficiency extends Model {
  static get tableName() {
    return "backgroundProficiencies";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "backgroundProficiencies.backgroundId",
          to: "backgrounds.id",
        },
      },
      proficiency: {
        relation: Model.BelongsToOneRelation,
        modelClass: Proficiency,
        join: {
          from: "backgroundProficiencies.proficiencyId",
          to: "proficiencies.id",
        },
      },
    };
  }
}

export default BackgroundProficiency;
