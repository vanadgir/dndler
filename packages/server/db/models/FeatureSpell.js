import { Model } from "objection";

import Spell from "./Spell.js";
import Feature from "./Feature.js";

class FeatureSpell extends Model {
  static get tableName() {
    return "featureSpells";
  }

  static get relationMappings() {
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: Spell,
        join: {
          from: "featureSpells.spellId",
          to: "spells.id",
        },
      },
      feature: {
        relation: Model.BelongsToOneRelation,
        modelClass: Feature,
        join: {
          from: "featureSpells.featureId",
          to: "features.id",
        },
      },
    };
  }
}

export default FeatureSpell;
