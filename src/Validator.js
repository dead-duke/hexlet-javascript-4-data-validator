import StringSchema from './schemas/StringSchema.js';
import NumberSchema from './schemas/NumberSchema.js';
import ArraySchema from './schemas/ArraySchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';

export default class Validator {
  constructor() {
    this.validators = {
      string: {},
      number: {},
      array: {},
    };
  }

  string() {
    this.schema = new StringSchema(this.validators.string);
    return this.schema;
  }

  number() {
    this.schema = new NumberSchema(this.validators.number);
    return this.schema;
  }

  array() {
    this.schema = new ArraySchema(this.validators.array);
    return this.schema;
  }

  object() {
    this.schema = new ObjectSchema();
    return this.schema;
  }

  addValidator(type, name, validator) {
    this.validators[type][name] = validator;
    return this;
  }
}
