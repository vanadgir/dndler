import { Model } from "objection";

import Class from "./Class.js";
import Equipment from "./Equipment.js";

class ClassEquipment extends Model {
  static get tableName() {
    return "classEquipments";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: "classEquipments.classId",
          to: "classes.id",
        },
      },
      equipment: {
        relation: Model.BelongsToOneRelation,
        modelClass: Equipment,
        join: {
          from: "classEquipments.equipmentId",
          to: "equipments.id",
        },
      },
    };
  }
}

export default ClassEquipment;
