import Validator from '../src/Validator.js';

let validator;

beforeEach(() => {
  validator = new Validator();
});

test('string schema', () => {
  const schema = validator.string();

  expect(schema.isValid('')).toBeTruthy();
  expect(schema.isValid(null)).toBeTruthy();
  expect(schema.isValid(undefined)).toBeTruthy();

  schema.required();

  expect(schema.isValid('hexlet')).toBeTruthy();
  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid('')).toBeFalsy();

  schema.contains('what');
  expect(schema.isValid('what does the fox say')).toBeTruthy();
  schema.contains('test');
  expect(schema.isValid('what does the fox say')).toBeFalsy();
});

test('number schema', () => {
  const schema = validator.number();

  expect(schema.isValid(null)).toBeTruthy();

  schema.required();

  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid(7)).toBeTruthy();

  schema.positive();

  expect(schema.isValid(10)).toBeTruthy();

  schema.range(-5, 5);

  expect(schema.isValid(-3)).toBeFalsy();
  expect(schema.isValid(5)).toBeTruthy();
});
