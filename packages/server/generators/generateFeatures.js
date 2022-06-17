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
            featureBody = classTraits[feature];
            // featureBody = { "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            break;
        default:
            break;
    };
    for (let key of Object.keys(featureBody)) {
        switch (key) {
            case 'description':
                (featureDescription === ""
                ? featureDescription = featureBody[key]
                : featureDescription = featureDescription + featureBody[key]);
                // featureDescription = featureDescription + featureBody[key];
                break;
            case 'pickOne':
                (featureDescription === ""
                ? featureDescription = sample(featureBody[key])
                : featureDescription = featureDescription + sample(featureBody[key]));
                // featureDescription = featureDescription + sample(featureBody[key]);
                break;
            case 'levelReq':
                for (let requirement of Object.keys(featureBody[key])) {
                    if (charLevel >= Number(requirement)) {
                        featureDescription = featureDescription.concat(featureBody[key][requirement]).concat("");
                    } else if (requirement === "description") {
                        featureDescription = featureDescription.concat(" ").concat(featureBody[key][requirement]);
                    };
                };
                break;
            default:
                break;
        };
    };
    return featureDescription;
};

// combine features from background and class
const generateFeatures = (classChoice, bgChoice, raceChoice, charLevel) => {
    let ind = 0;
    let fullFeatures = {};
    // gather race features and loop
    let raceFeatures = races[raceChoice]["Features"];
    for (let feature of raceFeatures) {
        fullFeatures[ind] = {
            "Name": feature,
            "Description": featureLookup(feature, 'Race'),
            "Source": raceChoice
        };
        ind += 1;
    };
    // gather background features and fill
    let bgFeatures = bgChoice["Features"];
    for (let feature of bgFeatures) {
        fullFeatures[ind] = {
            "Name": feature,
            "Description": featureLookup(feature, 'Background'),
            "Source": bgChoice["Name"]
        };
        ind += 1;
    };
    // gather class features
    let classFeatures = [];
    let iter = 1;
    let classFeatureInd = {};
    while (iter <= charLevel) {
        let currentLevel = classes[classChoice]["Features"][iter];
        classFeatures = classFeatures.concat(currentLevel);
        for (let feature of currentLevel) {
            let repeat = classFeatures.filter(x => x === feature).length > 1;
            if (!repeat) {
                // console.log(feature);
                classFeatureInd[feature] = ind;
                fullFeatures[ind] = {
                    "Name": feature,
                    "Description": featureLookup(feature, 'Class', iter),
                    "Source": classChoice + " " + iter
                };
                ind += 1;
            } else {
                let previousInd = classFeatureInd[feature];
                let oldSource = fullFeatures[previousInd]["Source"];
                fullFeatures[previousInd]["Description"] = featureLookup(feature, 'Class', iter);
                fullFeatures[previousInd]["Source"] = oldSource + ", " + iter;
            };
        };
        iter += 1;
    };
    return fullFeatures;
};

export default generateFeatures;