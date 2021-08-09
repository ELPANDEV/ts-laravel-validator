import values from "~/data/values";
import validator_gte from "~/validators/gte";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: 25, rule_value: 'age' },
  { value: 26, rule_value: 'age' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_gte(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_gte(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: 24, rule_value: 'age' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_gte(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_gte(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
