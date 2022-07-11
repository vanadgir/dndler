import { Model } from "objection";

class Metamagic extends Model {
  static get tableName() {
    return "metamagics";
  }
}

export default Metamagic;