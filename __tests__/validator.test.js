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
  expect(schema.isValid(NaN)).toBeFalsy();
  expect(schema.isValid(7)).toBeTruthy();

  schema.positive();

  expect(schema.isValid(10)).toBeTruthy();

  schema.range(-5, 5);

  expect(schema.isValid(-3)).toBeFalsy();
  expect(schema.isValid(5)).toBeTruthy();
});

test('array schema', () => {
  const schema = validator.array();

  expect(schema.isValid(null)).toBeTruthy();

  schema.required();

  expect(schema.isValid(null)).toBeFalsy();
  expect(schema.isValid([])).toBeTruthy();
  expect(schema.isValid(['hexlet'])).toBeTruthy();

  schema.sizeof(2);

  expect(schema.isValid(['hexlet'])).toBeFalsy();
  expect(schema.isValid(['hexlet', 'code-basics'])).toBeTruthy();
});

test('object schema', () => {
  const schema = validator.object();

  schema.shape({
    name: validator.string().required(),
    age: validator.number().positive(),
  });

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBeTruthy();
  expect(schema.isValid({ name: 'maya', age: null })).toBeTruthy();
  expect(schema.isValid({ name: '', age: null })).toBeFalsy();
  expect(schema.isValid({ name: 'ada', age: -5 })).toBeFalsy();
});

test('add user validator', () => {
  const startsWithFn = (value, start) => value.startsWith(start);

  validator.addValidator('string', 'startWith', startsWithFn);
  const firstSchema = validator.string().test('startWith', 'H');
  expect(firstSchema.isValid('exlet')).toBeFalsy();
  expect(firstSchema.isValid('Hexlet')).toBeTruthy();

  const minFn = (value, min) => value >= min;
  validator.addValidator('number', 'min', minFn);

  const secondSchema = validator.number().test('min', 5);
  expect(secondSchema.isValid(4)).toBeFalsy();
  expect(secondSchema.isValid(6)).toBeTruthy();
});
