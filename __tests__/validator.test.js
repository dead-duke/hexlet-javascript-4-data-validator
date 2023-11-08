import Validator from '../src/Validator.js';

test('string schema', () => {
  const validator = new Validator();
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
