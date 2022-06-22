import { Model } from "objection";

import Background from "./Background.js";
import Class from "./Class.js";
import Race from "./Race.js";
import BackgroundProficiency from "./BackgroundProficiency.js";
import ClassProficiency from "./ClassProficiency.js";
import RaceProficiency from "./RaceProficiency.js";

class Proficiency extends Model {
  static get tableName() {
    return "proficiencies";
  }

  static get relationMappings() {
    return {
      providingBackgrounds: {
        relation: Model.ManyToManyRelation,
        modelClass: Background,
        join: {
          from: "proficiencies.id",
          through: {
            from: "backgroundProficiencies.equipmentId",
            to: "backgroundProficiencies.backgroundId",
          },
          to: "backgrounds.id"
        }
      },
      providingClasses: {
        relation: Model.ManyToManyRelation,
        modelClass: Class,
        join: {
          from: "proficiencies.id",
          through: {
            from: "classProficiencies.equipmentId",
            to: "classProficiencies.classId",
          },
          to: "classes.id"
        }
      },
      providingRaces: {
        relation: Model.ManyToManyRelation,
        modelClass: Race,
        join: {
          from: "proficiencies.id",
          through: {
            from: "raceProficiencies.equipmentId",
            to: "raceProficiencies.raceId",
          },
          to: "races.id"
        }
      },
      backgroundProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: BackgroundProficiency,
        join: {
          from: "proficiencies.id",
          to: "backgroundProficiencies.proficiencyId"
        }
      },
      classProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: ClassProficiency,
        join: {
          from: "proficiencies.id",
          to: "classProficiencies.proficiencyId"
        }
      },
      raceProficiencies: {
        relation: Model.HasManyRelation,
        modelClass: RaceProficiency,
        join: {
          from: "proficiencies.id",
          to: "raceProficiencies.proficiencyId"
        }
      }
    };
  }
}

export default Proficiency;
