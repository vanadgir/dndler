import Class from "../models/Class.js";
import Feature from "../models/Feature.js";
import Proficiency from "../models/Proficiency.js";
import ClassFeature from "../models/ClassFeature.js";
import ClassProficiency from "../models/ClassProficiency.js";
import { classes } from "./data/SRD/index.js";
import Equipment from "../models/Equipment.js";
import ClassEquipment from "../models/ClassEquipment.js";

class ClassSeeder {
  static async seed() {
    const proficiencyCategoriesToParse = ["Armor", "Weapons", "Tools"];
    for (const singleClassTitle of Object.keys(classes)) {
      const currentClass = await Class.query().findOne({
        title: singleClassTitle,
      });
      if (!currentClass) {
        const singleClassData = classes[singleClassTitle];
        const thisClass = await Class.query().insert({
          title: singleClassTitle,
          hitDie: singleClassData.HitDice,
          skillChoices: singleClassData.Proficiencies.Skills.numChoices,
        });
        console.log("seeding proficiencies into", singleClassTitle, "...");
        for (const proficiencyCategory of proficiencyCategoriesToParse) {
          for (const proficiency of singleClassData.Proficiencies[
            proficiencyCategory
          ]) {
            const proficiencyModel = await Proficiency.query().findOne({
              category: proficiencyCategory,
              title: proficiency,
            });
            if (!proficiencyModel) {
              console.log(
                `the Proficiency of ${proficiency} in ${proficiencyCategory} was not found in the proficiencies table`
              );
            } else {
              await ClassProficiency.query().insert({
                classId: thisClass.id,
                proficiencyId: proficiencyModel.id,
              });
            }
          }
        }
        console.log("seeding equipments into", singleClassTitle, "...");
        for (const thisEquipment of singleClassData.Equipment) {
          if (Array.isArray(thisEquipment)) {
            console.log(thisEquipment[0]);
            const equipment1Model = await Equipment.query().findOne({
              title: thisEquipment[0].split("(")[0],
            });
            const equipment2Model = await Equipment.query().findOne({
              title: thisEquipment[1].split("(")[0],
            });
            if(equipment1Model && equipment2Model) {
              let count1 = 1;
              const ifCount1 = thisEquipment[0].split("(")[1];
              if(ifCount1) {
                count1 = parseInt(ifCount1[0]);
              }
              let count2 = 1;
              const ifCount2 = thisEquipment[1].split("(")[1];
              if(ifCount2) {
                count2 = parseInt(ifCount2[0]);
              }
              await ClassEquipment.query().insert({
                classId: thisClass.id,
                equipment1Id: equipment1Model.id,
                equipment1Count: count1,
                equipment2Id: equipment2Model.id,
                equipment2Count: count2
              })
            }
          } else {
            const equipmentModel = await Equipment.query().findOne({
              title: thisEquipment.split("(")[0],
            });
            if(!equipmentModel) {
              console.log(
                `the Equipment of ${thisEquipment} was not found in the equipments table`
              );
            } else {
              let count = 1;
              let ifCount = thisEquipment.split("(")[1];
              if(ifCount) {
                count = parseInt(ifCount[0]);
              }
              await ClassEquipment.query().insert({
                classId: thisClass.id,
                equipment1Id: equipmentModel.id,
                equipment1Count: count
              })
            }
          }
        }
        console.log("seeding features into", singleClassTitle, "...");
        for (const thisLevel of Object.keys(singleClassData.Features)) {
          for (const thisFeature of singleClassData.Features[thisLevel]) {
            const featureModel = await Feature.query().findOne({
              title: thisFeature,
            });
            if (!featureModel) {
              console.log(
                `the Feature of ${thisFeature} was not found in the features table`
              );
            } else {
              await ClassFeature.query().insert({
                classId: thisClass.id,
                featureId: featureModel.id,
                level: thisLevel,
              });
            }
          }
        }
      }
    }
  }
}

export default ClassSeeder;
