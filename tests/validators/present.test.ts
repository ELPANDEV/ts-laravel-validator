import values from "~/data/values";
import validator_present from "~/validators/present";

//#region true

const permitted_values = [
  'age',
  'gender',
]

permitted_values.forEach(key => {
  test(`validator_present(${key}) to equal true`, () => {
    expect(validator_present(key, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  'roles',
  'users'
]

non_permitted_values.forEach(key => {
  test(`validator_present(${key}) to equal false`, () => {
    expect(validator_present(key, values)).toEqual(false);
  })
})

//#endregion
