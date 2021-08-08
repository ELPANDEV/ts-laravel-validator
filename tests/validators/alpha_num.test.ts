import validator_alpha_num from "~/validators/alpha_num";

//#region true

const permitted_values = [
  'sjd24jke78jkjr',
  'asdl123qeriej',
  'p1oiwertk89jsd',
]

permitted_values.forEach(value => {
  test(`validator_alpha_num(${value}) to equal true`, () => {
    expect(validator_alpha_num(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  '283usdjf/',
  '28458jsds@',
  '[s9sd8fj',
  'sjdjke-jkjr',
  'asd_lqeriej',
  'poi-wert_kjsd',
]

non_permitted_values.forEach(value => {
  test(`validator_alpha_num(${value}) to equal false`, () => {
    expect(validator_alpha_num(value)).toEqual(false);
  })
})

//#endregion
