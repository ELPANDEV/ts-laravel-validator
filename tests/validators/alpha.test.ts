import validator_alpha from "~/validators/alpha";

//#region true

const permitted_values = [
  'sjdjkejkjr',
  'asdlqeriej',
  'poiwertkjsd',
]

permitted_values.forEach(value => {
  test(`validator_alpha(${value}) to equal true`, () => {
    expect(validator_alpha(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  '24kjksdas9',
  '283usdjf_',
  '28458jsds@',
  '[s9sd8fj'
]

non_permitted_values.forEach(value => {
  test(`validator_alpha(${value}) to equal false`, () => {
    expect(validator_alpha(value)).toEqual(false);
  })
})

//#endregion
