import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';

export default class Validator {
  string() {
    this.schema = new StringSchema();
    return this.schema;
  }

  number() {
    this.schema = new NumberSchema();
    return this.schema;
  }
}
