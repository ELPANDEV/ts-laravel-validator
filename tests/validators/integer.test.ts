import validator_integer from "../../validators/integer";

//#region true

const permitted_values = [
  13441,
  3485478,
  -23849
]

permitted_values.forEach(value => {
  test(`validator_integer(${value}) to equal true`, () => {
    expect(validator_integer(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  12.12,
  -5.25,
  '123.092',
  '-3.02',
]

non_permitted_values.forEach(value => {
  test(`validator_integer(${value}) to equal false`, () => {
    expect(validator_integer(value)).toEqual(false);
  })
})

//#endregion
