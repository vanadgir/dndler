import { Model } from "objection";

import Attribute from "./Attribute.js";

class Skill extends Model {
  static get tableName() {
    return "skills";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Attribute,
        join: {
          from: "skills.attributeId",
          to: "attributes.id",
        },
      },
    };
  }
}

export default Skill;
