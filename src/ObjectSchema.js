export default class ObjectSchema {
  isValid(value) {
    const keys = Object.keys(value);

    if (keys.length !== Object.keys(this.fields).length) {
      return false;
    }

    const validations = keys.map((key) => this.fields[key].isValid(value[key]));
    return !validations.includes(false);
  }

  shape(fields) {
    this.fields = fields;
    return this;
  }
}
