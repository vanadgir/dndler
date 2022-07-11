import Tool from "../models/Tool.js";
import { tools } from "./data/SRD/index.js";

class ToolSeeder {
  static async seed() {
    for(const singleToolCategory in Object.keys(tools)) {
      for(const singleToolData of singleToolCategory) {
        const currentTool = await Tool.query().findOne({ title: singleToolData });
        if(!currentTool) {
          await Tool.query().insert({ title: singleToolData, category: singleToolCategory, description: "DESCRIPTION NEEDED" });
        }
      }
    }
  }
}

export default ToolSeeder;
