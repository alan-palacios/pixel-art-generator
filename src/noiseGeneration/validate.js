import validationData from "./validationData.json";
  function validate(name, value) {
    if (validationData[name] == null) return true;
    switch (validationData[name].type) {
      case "int":
        return validateInt(value, validationData[name].min, validationData[name].max);
      case "float":
        return validateFloat(value, validationData[name].min, validationData[name].max);
      default:
        return true
    }
  }

  function validateInt(value, min, max) {
    if (isNumber(value) && value%1===0) {
      if (value>=min && value<=max) {
        return true; 
      }
    } 
    return false;
  }

  function validateFloat(value, min, max) {
    if (isNumber(value)) {
      if (value>=min && value<=max) {
        return true; 
      }
    } 
    return false;
  }

  function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
  const Validate = validate
  export default Validate;