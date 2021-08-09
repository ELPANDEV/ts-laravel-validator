import validator_accepted from "../../validators/accepted";

type values = { [key: string]: (string|number|boolean)[] }

//#region true

const permitted_values: values = {
  string:  ['yes', 'no'],
  number:  [1],
  boolean: [true],
}

for (const key in permitted_values) {
  permitted_values[key].forEach(value => {
    test(`validator_accepted(${value}) '${key}' to equal true`, () => {
      expect(validator_accepted(value)).toEqual(true);
    })
  })
}

//#endregion
//#region false

const non_permitted_values: values = {
  string:  ['pedro', 'true', 'false', '1', '0'],
  number:  [0, 2],
  boolean: [false]
}

for (const key in non_permitted_values) {
  non_permitted_values[key].forEach(value => {
    test(`validator_accepted(${value}) '${key}' to equal false`, () => {
      expect(validator_accepted(value)).toEqual(false);
    })
  })
}

//#endregion
