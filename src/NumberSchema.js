export default class NumberSchema {
  constructor(validators) {
    this.validators = validators;
    this.options = {};
  }

  isValid(value) {
    const validations = Object.values(this.options).map((validator) => validator(value));
    return !validations.includes(false);
  }

  test(name, ...args) {
    this.options[name] ??= (value) => this.validators[name](value, ...args);
    return this;
  }

  required() {
    this.options.required ??= (value) => (
      value !== null && value !== undefined && !Number.isNaN(value)
    );
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
