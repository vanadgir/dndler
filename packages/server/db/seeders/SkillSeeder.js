import Skill from "../models/Skill.js";
import { skills } from "./SRD/data.js";

class SkillSeeder {
  static async seed() {
    for(const singleSkillData of skills) {
      const currentSkill = await Skill.query().findOne(singleSkillData);
      if(!currentSkill) {
        await Skill.query().insert(singleSkillData);
      }
    }
  }
}

export default SkillSeeder;