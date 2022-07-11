import Metamagic from "../models/Metamagic.js";
import { metamagics } from "./data/SRD/index.js";

class MetamagicSeeder {
  static async seed() {
    for(const singleMetamagicData of metamagics) {
      const currentMetamagic = await Metamagic.query().findOne({ title: singleMetamagicData });
      if(!currentMetamagic) {
        await Metamagic.query().insert({ title: singleMetamagicData, description: "DESCRIPTION NEEDED" });
      }
    }
  }
}

export default MetamagicSeeder;
