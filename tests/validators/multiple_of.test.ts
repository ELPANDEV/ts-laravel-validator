import values from "~/data/values";
import validator_multiple_of from "~/validators/multiple_of";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: 10, rule_value: '1' },
  { value: 10, rule_value: '2' },
  { value: 10, rule_value: '5' },
  { value: 20, rule_value: '10' },
  { value: 20, rule_value: '4' },
  { value: 25, rule_value: '5' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_multiple_of(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_multiple_of(value, rule_value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: 9, rule_value:  '2' },
  { value: 10, rule_value: '3' },
  { value: 10, rule_value: '4' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_multiple_of(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_multiple_of(value, rule_value)).toEqual(false);
  })
})

//#endregion
