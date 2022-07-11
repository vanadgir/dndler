import languages from "./languages.js";
import { artisan, gaming, instrument } from "./tools.js";

const proficiencies = {
  Armor: [
    "Light",
    "Medium",
    "Heavy",
    "Shield"
  ],
  "Artisan's Tools": artisan,
  "Gaming Sets": gaming,
  Languages: languages,
  "Musical Instruments": instrument,
  Weapons: [
    "Simple",
    "Martial",
    "Club",
    "Dagger",
    "Dart",
    "Hand Crossbow",
    "Javelin",
    "Light Crossbow",
    "Longsword",
    "Mace",
    "Quarterstaff",
    "Rapier",
    "Scimitar",
    "Shortsword",
    "Sickle",
    "Sling",
    "Spear"
  ],
}

export default proficiencies;