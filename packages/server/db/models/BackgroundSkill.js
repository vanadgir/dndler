import { Model } from "objection";
import Background from "./Background.js";
import Skill from "./Skill.js";

class BackgroundSkill extends Model {
  static get tableName() {
    return "backgroundSkills";
  }

  static get relationMappings() {
    return {
      background: {
        relation: Model.BelongsToOneRelation,
        modelClass: Background,
        join: {
          from: "backgroundSkills.backgroundId",
          to: "backgrounds.id",
        },
      },
      skill: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill,
        join: {
          from: "backgroundSkills.skillId",
          to: "skills.id",
        },
      },
    };
  }
}

export default BackgroundSkill;
