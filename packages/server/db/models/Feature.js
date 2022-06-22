import { Model } from "objection";

import Background from "./Background.js";
import Class from "./Class.js";
import Race from "./Race.js";
import BackgroundFeature from "./BackgroundFeature.js";
import ClassFeature from "./ClassFeature.js";
import RaceFeature from "./RaceFeature.js";

class Feature extends Model {
  static get tableName() {
    return "features";
  }

  static get relationMappings() {
    return {
      providingBackgrounds: {
        relation: Model.ManyToManyRelation,
        modelClass: Background,
        join: {
          from: "features.id",
          through: {
            from: "backgroundFeatures.equipmentId",
            to: "backgroundFeatures.backgroundId",
          },
          to: "backgrounds.id"
        }
      },
      providingClasses: {
        relation: Model.ManyToManyRelation,
        modelClass: Class,
        join: {
          from: "features.id",
          through: {
            from: "classFeatures.equipmentId",
            to: "classFeatures.classId",
          },
          to: "classes.id"
        }
      },
      providingRaces: {
        relation: Model.ManyToManyRelation,
        modelClass: Race,
        join: {
          from: "features.id",
          through: {
            from: "raceFeatures.equipmentId",
            to: "raceFeatures.raceId",
          },
          to: "races.id"
        }
      },
      backgroundFeatures: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundFeature,
        join: {
          from: "features.id",
          to: "backgroundFeatures.featureId"
        }
      },
      classFeatures: {
        relation: Model.HasManyRelation,
        modelClass: ClassFeature,
        join: {
          from: "features.id",
          to: "classFeatures.featureId"
        }
      },
      raceFeatures: {
        relation: Model.HasManyRelation,
        modelClass: RaceFeature,
        join: {
          from: "features.id",
          to: "raceFeatures.featureId"
        }
      }
    };
  }
}

export default Feature;
