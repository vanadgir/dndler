import { Model } from "objection";

import Class from "./Class.js";
import Feature from "./Feature.js";

class ClassFeature extends Model {
  static get tableName() {
    return "classfeatures";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: "classFeatures.classId",
          to: "classes.id",
        },
      },
      feature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Feature,
        join: {
          from: "classFeatures.featureId",
          to: "features.id",
        },
      },
    };
  }
}

export default ClassFeature;
