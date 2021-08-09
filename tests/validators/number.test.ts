import validator_number from "../../validators/number";

//#region true

const permitted_values = [
  0,
  1,
  -1,
  384738,
  -38473
]

permitted_values.forEach(value => {
  test(`validator_number(${value}) to equal true`, () => {
    expect(validator_number(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  'a',
  '0',
  '1',
  '-1',
  [],
  true,
  false,
  {},
  () => {}
]

non_permitted_values.forEach(value => {
  test(`validator_number(${value}) to equal false`, () => {
    expect(validator_number(value)).toEqual(false);
  })
})

//#endregion
