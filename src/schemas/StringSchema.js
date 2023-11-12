class StringSchema {
  constructor(validators) {
    this.validators = validators;
    this.substrings = [];
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
      value !== null && value !== undefined && value.length > 0
    );
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

export default StringSchema;
