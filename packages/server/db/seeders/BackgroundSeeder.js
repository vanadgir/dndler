import Background from "../models/Background.js";

class BackgroundSeeder {
  static async seed() {
    const backgroundsData = [
      {
        title: "Acolyte",
        traits:
          "I quote (or misquote) sacred texts and proverbs in almost every situation.",
        ideals:
          "Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)",
        bonds: "Everything I do is for the common people.",
        flaws:
          "I put too much trust in those who wield power within my temple's hierarchy.",
      },
    ];
    for(const singleBackgroundData of backgroundsData) {
      const currentBackground = await Background.query().findOne(singleBackgroundData);
      if(!currentBackground) {
        await Background.query().insert(singleBackgroundData);
      }
    }
  }
}

export default BackgroundSeeder;
