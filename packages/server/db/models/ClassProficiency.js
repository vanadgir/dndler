import { Model } from "objection";
import Class from "./Class.js";
import Proficiency from "./Proficiency.js";

class ClassProficiency extends Model {
  static get tableName() {
    return "classProficiencies";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: "classProficiencies.classId",
          to: "classes.id",
        },
      },
      proficiency: {
        relation: Model.BelongsToOneRelation,
        modelClass: Proficiency,
        join: {
          from: "classProficiencies.proficiencyId",
          to: "proficiencies.id",
        },
      },
    };
  }
}

export default ClassProficiency;
