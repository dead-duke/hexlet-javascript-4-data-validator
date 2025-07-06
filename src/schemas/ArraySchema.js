export default class ArraySchema {
  constructor(validators) {
    this.validators = validators
    this.options = {}
  }

  isValid(value) {
    const validations = Object.values(this.options).map(validator => validator(value))
    return !validations.includes(false)
  }

  test(name, ...args) {
    this.options[name] = value => this.validators[name](value, ...args)
    return this
  }

  required() {
    this.options.required = value => (
      value !== null && value !== undefined && Array.isArray(value)
    )
    return this
  }

  sizeof(size) {
    this.options.sizeof = value => value.length === size
    return this
  }
}
