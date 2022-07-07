import { Model } from "objection";

import Race from "./Race.js";
import Feature from "./Feature.js";

class RaceFeature extends Model {
  static get tableName() {
    return "raceFeatures";
  }

  static get relationMappings() {
    return {
      race: {
        relation: Model.BelongsToOneRelation,
        modelClass: Race,
        join: {
          from: "raceFeatures.raceId",
          to: "races.id",
        },
      },
      feature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Feature,
        join: {
          from: "raceFeatures.featureId",
          to: "features.id",
        },
      },
    };
  }
}

export default RaceFeature;