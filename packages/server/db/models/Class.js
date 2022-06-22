import { Model } from 'objection';

import Character from "./Character.js";
import Equipment from "./Equipment.js";
import Feature from "./Feature.js";
import Proficiency from "./Proficiency.js";
import ClassEquipment from "./ClassEquipment.js";
import ClassFeature from "./ClassFeature.js";
import ClassProficiency from "./ClassProficiency.js";

class Class extends Model {
  static get tableName() {
    return "classes";
  }

  static get relationMappings() {
    return {
      characters: {
        relation: Model.HasManyRelation,
        modelClass: Character,
        join: {
          from: "classes.id",
          to: "characters.classId"
        }
      },
      equipments: {
        relation: Model.ManyToManyRelation,
        modelClass: Equipment,
        join: {
          from: "classes.id",
          through: {
            from: "classEquipments.classId",
            to: "classEquipments.equipmentId",
          },
          to: "equipments.id",
        }
      },
      features: {
        relation: Model.ManyToManyRelation,
        modelClass: Feature,
        join: {
          from: "classes.id",
          through: {
            from: "classFeatures.classId",
            to: "classFeatures.featureId",
          },
          to: "features.id",
        }
      },
      proficiencies: {
        relation: Model.ManyToManyRelation,
        modelClass: Proficiency,
        join: {
          from: "classes.id",
          through: {
            from: "classProficiencies.classId",
            to: "classProficiencies.proficiencyId",
          },
          to: "proficiencies.id",
        }
      },
      classEquipments: {
        relation: Model.HasManyRelation,
        modelClass: ClassEquipment,
        join: {
          from: "classes.id",
          to: "classEquipments.classId",
        },
      },
      classFeatures: {
        relation: Model.HasManyRelation,
        modelClass: ClassFeature,
        join: {
          from: "classes.id",
          to: "classFeatures.classId",
        },
      },
      classProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: ClassProficiency,
        join: {
          from: "classes.id",
          to: "classProficiencies.classId",
        },
      },
    }
  }
}

export default Class;