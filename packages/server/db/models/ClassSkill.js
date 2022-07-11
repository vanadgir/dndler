import { Model } from "objection";
import Class from "./Class.js";
import Skill from "./Skill.js";

class ClassSkill extends Model {
  static get tableName() {
    return "classSkills";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: "classSkills.classId",
          to: "classes.id",
        },
      },
      skill: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill,
        join: {
          from: "classSkills.skillId",
          to: "skills.id",
        },
      },
    };
  }
}

export default ClassSkill;
