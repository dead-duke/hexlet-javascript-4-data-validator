export default class ArraySchema {
  constructor() {
    this.options = {};
  }

  isValid(value) {
    const validators = Object.values(this.options);
    const result = validators.filter((validator) => validator(value));
    return result.length === validators.length;
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
