import { Model } from "objection";

import Background from "./Background.js";
import Class from "./Class.js";
import Race from "./Race.js";
import BackgroundEquipment from "./BackgroundEquipment.js";
import ClassEquipment from "./ClassEquipment.js";
import RaceEquipment from "./RaceEquipment.js";

class Equipment extends Model {
  static get tableName() {
    return "equipments";
  }

  static get relationMappings() {
    return {
      providingBackgrounds: {
        relation: Model.ManyToManyRelation,
        modelClass: Background,
        join: {
          from: "equipments.id",
          through: {
            from: "backgroundEquipments.equipmentId",
            to: "backgroundEquipments.backgroundId",
          },
          to: "backgrounds.id"
        }
      },
      providingClasses: {
        relation: Model.ManyToManyRelation,
        modelClass: Class,
        join: {
          from: "equipments.id",
          through: {
            from: "classEquipments.equipmentId",
            to: "classEquipments.classId",
          },
          to: "classes.id"
        }
      },
      providingRaces: {
        relation: Model.ManyToManyRelation,
        modelClass: Race,
        join: {
          from: "equipments.id",
          through: {
            from: "raceEquipments.equipmentId",
            to: "raceEquipments.raceId",
          },
          to: "races.id"
        }
      },
      backgroundEquipments: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundEquipment,
        join: {
          from: "equipments.id",
          to: "backgroundEquipments.equipmentId"
        }
      },
      classEquipments: {
        relation: Model.HasManyRelation,
        modelClass: ClassEquipment,
        join: {
          from: "equipments.id",
          to: "classEquipments.equipmentId"
        }
      },
      raceEquipments: {
        relation: Model.HasManyRelation,
        modelClass: RaceEquipment,
        join: {
          from: "equipments.id",
          to: "raceEquipments.equipmentId"
        }
      }
    };
  }
}

export default Equipment;
