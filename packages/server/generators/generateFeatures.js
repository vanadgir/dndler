// import lodash library
import pkg from 'lodash';
const { sample } = pkg;
import { races, backgroundTraits, racialTraits, classes, classTraits } from '../data/data.js'

// helper function for looking up feature in relevant catalogue
const featureLookup = (feature, source, charLevel) => {
    let featureDescription = "";
    let featureBody = {};
    switch (source) {
        case 'Race':
            featureBody = racialTraits[feature];
            break;
        case 'Background':
            featureBody = backgroundTraits[feature];
            break;
        case 'Class':
            // featureBody = classTraits[feature];
            featureBody = {"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            break;
        default:
            break;
    };
    for (let key of Object.keys(featureBody)) {
        if (key === "description") {
            featureDescription = featureBody[key];
        } else if (key === "pickOne") {
            featureDescription = sample(featureBody[key]);
        } else if (key === "levelReq") {
            for (let requirement of Object.keys(featureBody[key])) {
                if (charLevel >= Number(requirement)) {
                    featureDescription = featureDescription.concat(featureBody[key][requirement]).concat(" ");
                } else if (requirement === "description") {
                    featureDescription = featureDescription.concat(" ").concat(featureBody[key][requirement]);
                };
            };
        };
    };
    return featureDescription;
};

// combine features from background and class, still need to add race
const generateFeatures = (classChoice, bgChoice, raceChoice, charLevel) => {
    let ind = 0;
    let fullFeatures = {};
    let raceFeatures = races[raceChoice]["Features"];
    for (let feature of raceFeatures) {
        fullFeatures[ind] = {
            "Name": feature,
            "Description": featureLookup(feature, 'Race'),
            "Source": raceChoice
        };
        ind += 1;
    };
    let bgFeatures = bgChoice["Features"];
    for (let feature of bgFeatures) {
        fullFeatures[ind] = {
            "Name": feature,
            "Description": featureLookup(feature, 'Background'),
            "Source": bgChoice["Name"]
        };
        ind += 1;
    }
    let iter = 1;
    let classFeatures = [];
    while (iter <= charLevel) {
        let currentLevel = classes[classChoice]["Features"][iter];
        classFeatures = classFeatures.concat(currentLevel);
        for (let feature of currentLevel) {
            fullFeatures[ind] = {
                "Name": feature,
                "Description": featureLookup(feature, 'Class', iter),
                "Source": classChoice + " " + String(iter)
            };
            ind += 1;
        };
        iter += 1;
    };
    return fullFeatures;
};

export default generateFeatures;