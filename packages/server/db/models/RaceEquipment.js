import { Model } from "objection";

import Race from "./Race.js";
import Equipment from "./Equipment.js";

class RaceEquipment extends Model {
  static get tableName() {
    return "raceEquipments";
  }

  static get relationMappings() {
    return {
      race: {
        relation: Model.BelongsToOneRelation,
        modelClass: Race,
        join: {
          from: "raceEquipments.raceId",
          to: "races.id",
        },
      },
      equipment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Equipment,
        join: {
          from: "raceEquipments.equipmentId",
          to: "equipments.id",
        },
      },
    };
  }
}

export default RaceEquipment;
