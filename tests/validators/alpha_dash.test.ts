import validator_alpha_dash from "~/validators/alpha_dash";

//#region true

const permitted_values = [
  'sjdjkejkjr',
  'asdlqeriej',
  'poiwertkjsd',
  'sjdjke-jkjr',
  'asd_lqeriej',
  'poi-wert_kjsd',
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
