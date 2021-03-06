import validator_after_or_equal from "../../validators/after_or_equal";
import mm from "../../types/mm";
import yyyy from "../../types/yyyy";

type values = (`${number}-${mm}-${yyyy}`)[][]

//#region true

const permitted_values: values = [
  ['10-10-2020', '10-10-2020'],
  
  ['11-10-2020', '10-10-2020'],
  ['10-11-2020', '10-10-2020'],
  ['10-10-2021', '10-10-2020'],

  ['11-11-2020', '10-10-2020'],
  ['10-11-2021', '10-10-2020'],
  ['11-10-2021', '10-10-2020'],

  ['11-11-2021', '10-10-2020'],
]

permitted_values.forEach(value => {
  test(`validator_after_or_equal(${value[0]}, ${value[1]}) to equal true`, () => {
    expect(validator_after_or_equal(value[0], value[1])).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values = [
  ['10-10-2020', '11-10-2020'],
  ['10-10-2020', '10-11-2020'],
  ['10-10-2020', '10-10-2021'],

  ['10-10-2020', '11-11-2020'],
  ['10-10-2020', '10-11-2021'],
  ['10-10-2020', '11-10-2021'],

  ['10-10-2020', '11-11-2021'],
]

non_permitted_values.forEach(value => {
  test(`validator_after_or_equal(${value[0]}, ${value[1]}) to equal false`, () => {
    expect(validator_after_or_equal(value[0], value[1])).toEqual(false);
  })
})

//#endregion
