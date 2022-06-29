import { Model } from "objection";

import Background from "./Background.js";
import Feature from "./Feature.js";

class BackgroundFeature extends Model {
  static get tableName() {
    return "backgroundFeatures";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "backgroundFeatures.backgroundId",
          to: "backgrounds.id",
        },
      },
      feature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Feature,
        join: {
          from: "backgroundFeatures.featureId",
          to: "features.id",
        },
      },
    };
  }
}

export default BackgroundFeature;
