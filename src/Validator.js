import StringSchema from './StringSchema.js';
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    this.schema = new StringSchema();
    return this.schema;
  }

  number() {
    this.schema = new NumberSchema();
    return this.schema;
  }

  array() {
    this.schema = new ArraySchema();
    return this.schema;
  }

  object() {
    this.schema = new ObjectSchema(this);
    return this.schema;
  }
}
