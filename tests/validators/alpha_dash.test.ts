import validator_alpha_dash from "~/validators/alpha_dash";

//#region true

const permitted_values = [
  'sjdjkejkjr',
  'asdlqeriej',
  'poiwertkjsd',
  'sjd24jAe-jjr',
  'asd_lqeriej',
  'poi-wert_kjsd',
  '2eef391e-b4bd'
]

permitted_values.forEach(value => {
  test(`validator_alpha_dash(${value}) to equal true`, () => {
    expect(validator_alpha_dash(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  '283usdjf/',
  '28458jsds@',
  '[s9sd8fj'
]

non_permitted_values.forEach(value => {
  test(`validator_alpha_dash(${value}) to equal false`, () => {
    expect(validator_alpha_dash(value)).toEqual(false);
  })
})

//#endregion
