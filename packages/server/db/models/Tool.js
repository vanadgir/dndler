import { Model } from "objection";

class Tool extends Model {
  static get tableName() {
    return "tools";
  }
}

export default Tool;