// Utility functions
/* *export */ const isNotNull = (str) => {
  str != "null";
  return true;
};

const hasRightLength = (str) => {
  if (str.length < 9) {
    return true;
  }
};

const hasUpperCaseCharacter = (str) => {
  let regex = new RegExp("[A-Z{1,}]");
  let match = str.match(regex);
  if (match === null) {
    return false;
  } else return true;
};

const hasLowerCaseCharacter = (str) => {
  let regex = new RegExp("[a-z{1,}]");
  let match = str.match(regex);
  if (match === null) {
    return false;
  } else return true;
};

const hasDigit = (str) => {
  let regex = new RegExp("[0-9{1,}]");
  let match = str.match(regex);
  if (match === null) {
    return false;
  } else return true;
};

const minimumConditionsReached = conditions => {
  // conditions is an array of booleans
  trueConditions = conditions.filter(bool => bool);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
  const conditions = [
    isNotNull(password),
    hasRightLength(password),
    hasUpperCaseCharacter(password),
    hasLowerCaseCharacter(password),
    hasDigit(password)
  ];
  const result =
    minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

  return result;
};

module.exports = {
  verifyPassword,
  hasRightLength,
  isNotNull,
  hasUpperCaseCharacter,
  hasLowerCaseCharacter,
  hasDigit,
  minimumConditionsReached
};

/* Het ligt waarschijnlijk aan de node versie of dit werkt of niet.
Je mag dit ook vervangen door export voor alle const functie te zetten. * */