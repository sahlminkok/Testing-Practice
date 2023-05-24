const stringLength = string => {
  if(string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    throw new Error('String should be more than one character and less than 10')
  }
}

const reverseString = string => {
  return string.split('').reverse().join('').toLowerCase();
}

class Calculator {
  add(num1, num2) {
      return num1 + num2
  }
  
  subtract(num1, num2) {
      return num1 - num2;
  }

  divide(num1, num2) {
      return num1 / num2;
  }

  multiply(num1, num2) {
      return num1 * num2;
  }
}

const capitalizeString = string => string.charAt(0).toUpperCase() + string.slice(1);

const calculator = new Calculator();

module.exports = { stringLength, reverseString, calculator, capitalizeString };