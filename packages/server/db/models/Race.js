import { Model } from "objection";

import Character from "./Character.js";
import Equipment from "./Equipment.js";
import Feature from "./Feature.js";
import Proficiency from "./Proficiency.js";
import RaceEquipment from "./RaceEquipment.js";
import RaceFeature from "./RaceFeature.js";
import RaceProficiency from "./RaceProficiency.js";

class Race extends Model {
  static get tableName() {
    return "races";
  }

  static get relationMappings() {
    return {
      characters: {
        relation: Model.HasManyRelation,
        modelClass: Character,
        join: {
          from: "races.id",
          to: "characters.raceId",
        },
      },
      equipments: {
        relation: Model.ManyToManyRelation,
        modelClass: Equipment,
        join: {
          from: "races.id",
          through: {
            from: "raceEquipments.raceId",
            to: "raceEquipments.equipmentId",
          },
          to: "equipments.id",
        },
      },
      features: {
        relation: Model.ManyToManyRelation,
        modelClass: Feature,
        join: {
          from: "races.id",
          through: {
            from: "raceFeatures.raceId",
            to: "raceFeatures.featureId",
          },
          to: "features.id",
        },
      },
      proficiencies: {
        relation: Model.ManyToManyRelation,
        modelClass: Proficiency,
        join: {
          from: "races.id",
          through: {
            from: "raceProficiencies.raceId",
            to: "raceProficiencies.proficiencyId",
          },
          to: "proficiencies.id",
        },
      },
      raceEquipments: {
        relation: Model.HasManyRelation,
        modelClass: RaceEquipment,
        join: {
          from: "races.id",
          to: "raceEquipments.raceId",
        },
      },
      raceFeatures: {
        relation: Model.HasManyRelation,
        modelClass: RaceFeature,
        join: {
          from: "races.id",
          to: "raceFeatures.raceId",
        },
      },
      raceProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: RaceProficiency,
        join: {
          from: "races.id",
          to: "raceProficiencies.raceId",
        },
      },
    };
  }
}

export default Race;
