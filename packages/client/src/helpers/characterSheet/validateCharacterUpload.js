import AJV from "ajv";
import characterSchema from "../ajv/characterSchema.js";

const validateCharacterUpload = (character) => {
  const ajv = new AJV();
  const valid = ajv.validate(characterSchema, character);
  if (valid) return true;
  else {
    console.log(ajv.errors);
    const errors = Object.keys(ajv.errors).map((error) => {
      return `ERROR: ${ajv.errors[error].additionalProperties} (${ajv.errors[error].message})`;
    }).join('\n');
    alert(errors);
    return false;
  }
};

export default validateCharacterUpload;