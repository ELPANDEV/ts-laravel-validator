import validator_string from "../../validators/string";

//#region true

const permitted_values = [
  '',
  'a',
  'abcdefg',
  '0',
  '1',
  '-1',
  'true',
  'false',
  '[]',
  '{}',
  '() => {}',
]

permitted_values.forEach(value => {
  test(`validator_string(${value}) to equal true`, () => {
    expect(validator_string(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  0,
  1,
  -1,
  475487,
  -37478934,
  [],
  true,
  false,
  {},
  () => {}
]

non_permitted_values.forEach(value => {
  test(`validator_string(${value}) to equal false`, () => {
    expect(validator_string(value)).toEqual(false);
  })
})

//#endregion
