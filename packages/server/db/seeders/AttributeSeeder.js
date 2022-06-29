import Attribute from "../models/Attribute.js";
import { abilityScores as attributes} from "./SRD/data.js";

class AttributeSeeder {
  static async seed() {
    for(const singleAttributeData of attributes) {
      const currentAttribute = await Attribute.query().findOne(singleAttributeData);
      if(!currentAttribute) {
        await Attribute.query().insert(singleAttributeData);
      }
    }
  }
}

export default AttributeSeeder;
