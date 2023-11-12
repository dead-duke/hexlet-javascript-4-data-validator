export default class ArraySchema {
  constructor() {
    this.options = {};
  }

  isValid(value) {
    const validations = Object.values(this.options).map((validator) => validator(value));
    return !validations.includes(false);
  }

  required() {
    this.options.required ??= (value) => Array.isArray(value);
    return this;
  }

  sizeof(size) {
    this.options.sizeof ??= (value) => value.length === size;
    return this;
  }
}
