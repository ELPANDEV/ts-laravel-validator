import validator_alpha from "~/validators/alpha";

//#region true

const permitted_values = [
  '3j7hfye8j5uf',
  '824udjhsuehr',
  'uw8A9I0ffPsu'
]

permitted_values.forEach(value => {
  test(`validator_alpha(${value}) to equal true`, () => {
    expect(validator_alpha(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
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
