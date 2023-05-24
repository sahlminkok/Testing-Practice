const { describe } = require('yargs');
const { reverseString, stringLength , calculator, capitalizeString} = require('./string');

it('return string length', () => {
  expect(stringLength('Hello')).toBe(5);
});

it('length restrictions', () => {
  expect(() => stringLength('')).toThrow('String should be more than one character and less than 10')
  expect(() => stringLength('12345678910')).toThrow('String should be more than one character and less than 10')
  expect(stringLength('1234567891')).toBe(10)
});

it('return reverse string', () => {
  expect(reverseString('Hello')).toBe('olleh');
  expect(reverseString('Sahalu')).toBe('ulahas');
});

describe('it can add', () => {
  test('add 1 + 2', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('add 2 + 4', () => {
    expect(calculator.add(2, 4)).toBe(6);
  });

  test('add 3 + 6', () => {
    expect(calculator.add(3, 6)).toBe(9);
  });
  
})

describe('it can subtract', () => {
  test('subtract 1 - 2', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test('subtract 2 - 4', () => {
    expect(calculator.subtract(2, 4)).toBe(-2);
  });

  test('subtract 3 - 6', () => {
    expect(calculator.subtract(3, 6)).toBe(-3);
  });
})

describe('it can divide', () => {
  test('divide: 1 / 2', () => {
    expect(calculator.divide(1, 2)).toBe(.5);
  });

  test('divide: 2 / 4', () => {
    expect(calculator.divide(2, 4)).toBe(.5);
  });

  test('divide: 3 / 6', () => {
    expect(calculator.divide(3, 6)).toBe(.5);
  });
})

describe('it can multiply', () => {
  test('multiply: 1 * 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test('multiply: 2 * 4', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('multiply: 3 * 6', () => {
    expect(calculator.multiply(3, 6)).toBe(18);
  });
});

test('capitalize the first letter', () => {
  expect(capitalizeString('sahalu')).toBe('Sahalu');
});