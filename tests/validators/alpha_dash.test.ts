import validator_alpha_dash from "~/validators/alpha_dash";

//#region true

const permitted_values = [
  '3j7hfye8j5uf',
  '824udjhsuehr',
  'uw8A9I0ffPsu',
  '3j7hf-ye8j5uf',
  '3j7hf-ye8j5-uf',
  '824ud_jhsuehr',
  '824ud_jhsue_hr',
  '3j7hf-ye8j_5uf',
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
