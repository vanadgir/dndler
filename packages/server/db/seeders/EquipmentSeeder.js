import Equipment from "../models/Equipment.js";
import { equipments } from "./data/SRD/index.js";

class EquipmentSeeder {
  static async seed() {
    for (const equipmentCategory of ["Weapon", "Armor"]) {
      for (const subCategory in equipments[equipmentCategory]) {
        for (const equipmentTitle in equipments[equipmentCategory][subCategory]) {
          const thisEquipment =
            equipments[equipmentCategory][subCategory][equipmentTitle];
          const currentEquipment = await Equipment.query().findOne({
            title: equipmentTitle,
          });

          if (!currentEquipment) {
            await Equipment.query().insert({
              ...thisEquipment,
              title: equipmentTitle,
              category: `${subCategory} ${equipmentCategory}`,
            });
          }
        }
      }
    }
  }
}

export default EquipmentSeeder;
