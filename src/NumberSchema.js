export default class NumberSchema {
  constructor() {
    this.options = {};
  }

  isValid(value) {
    const validators = Object.values(this.options);
    const result = validators.filter((validator) => validator(value));
    return result.length === validators.length;
  }

  required() {
    this.options.required ??= (value) => typeof value === 'number';
    return this;
  }

  positive() {
    this.options.positive ??= (value) => value > 0;
  }

  range(min, max) {
    this.options.range ??= (value) => value >= min && value <= max;
  }
}
