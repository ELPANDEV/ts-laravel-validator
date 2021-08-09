import values from "../../data/values";
import validator_in_array from "../../validators/in_array";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: 'et', rule_value: 'tags' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_in_array(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_in_array(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: 'et1', rule_value: 'tags' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_in_array(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_in_array(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
