export default class NumberSchema {
  constructor() {
    this.options = {};
  }

  isValid(value) {
    const validations = Object.values(this.options).map((validator) => validator(value));
    return !validations.includes(false);
  }

  required() {
    this.options.required ??= (value) => typeof value === 'number';
    return this;
  }

  positive() {
    this.options.positive ??= (value) => value >= 0;
    return this;
  }

  range(min, max) {
    this.options.range ??= (value) => value >= min && value <= max;
    return this;
  }
}
