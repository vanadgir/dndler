import { Model } from "objection";

import Skill from "./Skill.js";

class Attribute extends Model {
  static get tableName() {
    return "attributes";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.HasManyRelation,
        modelClass: Skill,
        join: {
          from: "attributes.id",
          to: "skills.attributeId",
        },
      },
    };
  }
}

export default Attribute;
