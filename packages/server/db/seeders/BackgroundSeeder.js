import Background from "../models/Background.js";
import Equipment from "../models/Equipment.js";
import Feature from "../models/Feature.js";
import Proficiency from "../models/Proficiency.js";
import Skill from "../models/Skill.js";
import PersonalityTrait from "../models/PersonalityTrait.js";
import PersonalityIdeal from "../models/PersonalityIdeal.js";
import PersonalityBond from "../models/PersonalityBond.js";
import PersonalityFlaw from "../models/PersonalityFlaw.js";
import BackgroundEquipment from "../models/BackgroundEquipment.js";
import BackgroundSkill from "../models/BackgroundSkill.js";
import BackgroundFeature from "../models/BackgroundFeature.js";
import BackgroundProficiency from "../models/BackgroundProficiency.js";
import { backgrounds } from "./data/SRD/index.js";

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
        for (const singleBackgroundTrait of backgrounds[singleBackgroundTitle].Trait) {
          await PersonalityTrait.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundTrait,
          });
        }
        for (const singleBackgroundIdeal of backgrounds[singleBackgroundTitle].Ideal) {
          await PersonalityIdeal.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundIdeal,
          });
        }
        for (const singleBackgroundBond of backgrounds[singleBackgroundTitle].Bond) {
          await PersonalityBond.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundBond,
          });
        }
        for (const singleBackgroundFlaw of backgrounds[singleBackgroundTitle].Flaw) {
          await PersonalityFlaw.query().insert({
            backgroundId: backgroundModel.id,
            text: singleBackgroundFlaw,
          });
        }
        console.log("seeding equipments into", singleBackgroundTitle, "...");
        for (const singleBackgroundEquipment of backgrounds[singleBackgroundTitle].Gear) {
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
        console.log("seeding skills into", singleBackgroundTitle, "...");
        for (const singleBackgroundSkill of backgrounds[singleBackgroundTitle].Skills) {
          const skillModel = await Skill.query().findOne({ title: singleBackgroundSkill });
          if(!skillModel) {
            console.log(`${singleBackgroundSkill} was not found in the skills table`);
          } else {
            await BackgroundSkill.query().insert({
              backgroundId: backgroundModel.id,
              skillId: skillModel.id
            })
          }
        }

        console.log("seeding features into", singleBackgroundTitle, "...");
        for (const singleBackgroundFeature of backgrounds[singleBackgroundTitle].Features) {
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

        console.log("seeding proficiencies into", singleBackgroundTitle, "...");
        for (const singleBackgroundProficiencyCategory of Object.keys(backgrounds[singleBackgroundTitle].Proficiencies)) {
          for(const singleBackgroundProficiency of backgrounds[singleBackgroundTitle].Proficiencies[singleBackgroundProficiencyCategory]) {
            const proficiencyModel = await Proficiency.query().findOne({ category: singleBackgroundProficiencyCategory, title: singleBackgroundProficiency });
            if(!proficiencyModel) {
              console.log(`${singleBackgroundProficiency} was not found in the proficiencies table`);
            } else {
              await BackgroundProficiency.query().insert({
                backgroundId: backgroundModel.id,
                proficiencyId: proficiencyModel.id
              })
            }
          }
        }
      }
    }
  }
}

export default BackgroundSeeder;
