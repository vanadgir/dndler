import Background from "../models/Background.js";
import BackgroundEquipment from "../models/BackgroundEquipment.js";
import BackgroundFeature from "../models/BackgroundFeature.js";
import { backgrounds } from "./SRD/data.js";

class BackgroundSeeder {
  static async seed() {
    for (const singleBackgroundTitle of Object.keys(backgrounds)) {
      const currentBackground = await Background.query().findOne({
        title: singleBackgroundTitle,
      });
      if (!currentBackground) {
        const backgroundModel = await Background.query().insert({
          title: singleBackgroundTitle,
        });
        console.log("seeding personality features into", singleBackgroundTitle, "...");
        for (const singleBackgroundTrait in backgrounds[singleBackgroundTitle].Trait) {
          await PersonalityTrait.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundTrait,
          });
        }
        for (const singleBackgroundIdeal in backgrounds[singleBackgroundTitle].Ideal) {
          await PersonalityIdeal.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundIdeal,
          });
        }
        for (const singleBackgroundBond in backgrounds[singleBackgroundTitle].Bond) {
          await PersonalityBond.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundBond,
          });
        }
        for (const singleBackgroundFlaw in backgrounds[singleBackgroundTitle].Flaw) {
          await PersonalityFlaw.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundFlaw,
          });
        }
        console.log("seeding equipments into", singleBackgroundTitle, "...");
        for (const singleBackgroundEquipment in backgrounds[singleBackgroundTitle].Gear) {
          const equipmentModel = await Equipment.query().findOne({ title: singleBackgroundEquipment.split("(")[0] });
          if(!equipmentModel) {
            console.log(`${singleBackgroundEquipment} was not found in the equipments table`);
          } else {
            await BackgroundEquipment.query().insert({
              backgroundId: backgroundModel.id,
              equipmentId: equipmentModel.id
            });
          }
        }
        console.log("seeding features into", singleBackgroundTitle, "...");
        for (const singleBackgroundFeature in backgrounds[singleBackgroundTitle].Features) {
          const featureModel = await Feature.query().findOne({ title: singleBackgroundFeature });
          if(!featureModel) {
            console.log(`${singleBackgroundFeature} was not found in the features table`);
          } else {
            await BackgroundFeature.query().insert({
              backgroundId: backgroundModel.id,
              featureId: featureModel.id
            })
          }
        }
      }
    }
  }
}

export default BackgroundSeeder;
