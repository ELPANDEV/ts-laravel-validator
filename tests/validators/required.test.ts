import IValues from "../../types/values";
import validator_required from "../../validators/required";

//#region true

const permitted_values = [
  'a',
  'aasdasd',
  1,
  1231,
  true,
  false
]

permitted_values.forEach(value => {
  test(`validator_required(${value}) to equal true`, () => {
    expect(validator_required(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  null,
  undefined,
  ''
]

non_permitted_values.forEach(value => {
  test(`validator_required(${value}) to equal false`, () => {
    expect(validator_required(value)).toEqual(false);
  })
})

//#endregion
