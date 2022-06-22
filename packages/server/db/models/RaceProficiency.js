import { Model } from "objection";

import Race from "./Race.js";
import Proficiency from "./Proficiency.js";

class RaceProficiency extends Model {
  static get tableName() {
    return "raceProficiencies";
  }

  static get relationMappings() {
    return {
      race: {
        relation: Model.BelongsToOneRelation,
        modelClass: Race,
        join: {
          from: "raceProficiencies.raceId",
          to: "races.id",
        },
      },
      proficiency: {
        relation: Model.BelongsToOneRelation,
        modelClass: Proficiency,
        join: {
          from: "raceProficiencies.proficiencyId",
          to: "proficiencies.id",
        },
      },
    };
  }
}

export default RaceProficiency;
