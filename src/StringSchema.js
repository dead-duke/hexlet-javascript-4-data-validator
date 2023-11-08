export default class StringValidator {
  constructor() {
    this.substrings = [];
    this.options = {};
  }

  isValid(value) {
    const validators = Object.values(this.options);
    const result = validators.filter((validator) => validator(value));
    return result.length === validators.length;
  }

  required() {
    this.options.required ??= (value) => typeof value === 'string' && value.length > 0;
    return this;
  }

  minLength(length) {
    this.options.minLength ??= (value) => value.length >= length;
    return this;
  }

  contains(string) {
    this.options.contains ??= (value) => {
      if (this.substrings.length === 0) {
        return true;
      }
      const matches = this.substrings.filter((substring) => value.includes(substring));
      return matches.length === this.substrings.length;
    };

    this.substrings.push(string);
    return this;
  }
}
