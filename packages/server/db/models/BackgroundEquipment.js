import { Model } from "objection";
import Background from "./Background.js";
import Equipment from "./Equipment.js";

class BackgroundEquipment extends Model {
  static get tableName() {
    return "backgroundEquipments";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "backgroundEquipments.backgroundId",
          to: "backgrounds.id",
        },
      },
      equipment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Equipment,
        join: {
          from: "backgroundEquipments.equipmentId",
          to: "equipments.id",
        },
      },
    };
  }
}

export default BackgroundEquipment;
