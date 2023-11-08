import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    this.schema = new StringSchema();
    return this.schema;
  }
}
