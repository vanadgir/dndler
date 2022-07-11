import { Model } from "objection";

class Naming extends Model {
  static get tableName() {
    return "namings";
  }
}

export default Naming;