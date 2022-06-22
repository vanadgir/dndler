import { Model } from 'objection';

import Character from "./Character.js";
import Equipment from "./Equipment.js";
import Feature from "./Feature.js";
import Proficiency from "./Proficiency.js";
import BackgroundEquipment from "./BackgroundEquipment.js";
import BackgroundFeature from "./BackgroundFeature.js";
import BackgroundProficiency from "./BackgroundProficiency.js";

class Background extends Model {
  static get tableName() {
    return "backgrounds";
  }

  static get relationMappings() {
    return {
      characters: {
        relation: Model.HasManyRelation,
        modelClass: Character,
        join: {
          from: "backgrounds.id",
          to: "characters.backgroundId"
        }
      },
      equipments: {
        relation: Model.ManyToManyRelation,
        modelClass: Equipment,
        join: {
          from: "backgrounds.id",
          through: {
            from: "backgroundEquipments.backgroundId",
            to: "backgroundEquipments.equipmentId",
          },
          to: "equipments.id",
        }
      },
      features: {
        relation: Model.ManyToManyRelation,
        modelClass: Feature,
        join: {
          from: "backgrounds.id",
          through: {
            from: "backgroundFeatures.backgroundId",
            to: "backgroundFeatures.featureId",
          },
          to: "features.id",
        }
      },
      proficiencies: {
        relation: Model.ManyToManyRelation,
        modelClass: Proficiency,
        join: {
          from: "backgrounds.id",
          through: {
            from: "backgroundProficiencies.backgroundId",
            to: "backgroundProficiencies.proficiencyId",
          },
          to: "proficiencies.id",
        }
      },
      backgroundEquipments: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundEquipment,
        join: {
          from: "backgrounds.id",
          to: "backgroundEquipments.backgroundId",
        },
      },
      backgroundFeatures: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundFeature,
        join: {
          from: "backgrounds.id",
          to: "backgroundFeatures.backgroundId",
        },
      },
      backgroundProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundProficiency,
        join: {
          from: "backgrounds.id",
          to: "backgroundProficiencies.backgroundId",
        },
      },
    }
  }
}

export default Background;