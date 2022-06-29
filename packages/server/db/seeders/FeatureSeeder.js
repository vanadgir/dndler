import Feature from "../models/Feature.js";
import features from "./SRD/features.js";

class FeatureSeeder {
  static async seed() {
    for(const singleFeatureData of features) {
      const currentFeature = await Feature.query().findOne(singleFeatureData);
      if(!currentFeature) {
        await Feature.query().insert(singleFeatureData);
      }
    }
  }
}

export default FeatureSeeder;
