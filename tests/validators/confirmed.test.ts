import values from "../../data/values";
import validator_confirmed from "../../validators/confirmed";

//#region true

const permitted_keys = [
  'password'
]

permitted_keys.forEach(key => {
  test(`validator_confirmed(${key}) to equal true`, () => {
    expect(validator_confirmed(key, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_keys = [
  'age',
  'eye_color',
  'gender',
]

non_permitted_keys.forEach(key => {
  test(`validator_confirmed(${key}) to equal false`, () => {
    expect(validator_confirmed(key, values)).toEqual(false);
  })
})

//#endregion
