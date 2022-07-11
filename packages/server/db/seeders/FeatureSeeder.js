import Feature from "../models/Feature.js";
import { features } from "./data/SRD/index.js";

class FeatureSeeder {
  static async seed() {
    for (const singleFeature in features) {
      const currentFeature = await Feature.query().findOne({
        title: singleFeature,
      });
      if (!currentFeature) {
        await Feature.query().insert({
          ...features[singleFeature],
          title: singleFeature,
        });
      }
    }
  }
}

export default FeatureSeeder;
