import { Model } from "objection";

class Language extends Model {
  static get tableName() {
    return "languages";
  }
}

export default Language;