import Equipment from "../models/Equipment.js";
import { equipment } from "./SRD/data.js";

class EquipmentSeeder {
  static async seed() {
    for (const equipmentCategory of ["Weapon", "Armor"]) {
      for (const subCategory in equipment[equipmentCategory]) {
        for (const equipmentTitle in equipment[equipmentCategory][
          subCategory
        ]) {
          const thisEquipment =
            equipment[equipmentCategory][subCategory][equipmentTitle];
          const currentEquipment = await Equipment.query().findOne({
            title: equipmentTitle,
          });

          if (!currentEquipment) {
            await Equipment.query().insert({
              ...thisEquipment,
              title: equipmentTitle,
              category: `${subCategory} ${equipmentCategory}`
            });
          }
        }
      }
    }
  }
}

export default EquipmentSeeder;
