import values from "../../data/values";
import validator_required_without_all from "../../validators/required_without_all";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '1',   rule_value: 'favorite_fruit_id' },
  { value: [2],   rule_value: 'document' },
  { value: 5,     rule_value: 'document,favorite_fruit_id' },
  { value: null,  rule_value: 'age,document,favorite_fruit_id' },
  { value: [],    rule_value: 'document,favorite_fruit' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without_all(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_required_without_all(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: null,  rule_value: 'document,favorite_fruit_id' },
  { value: '',    rule_value: 'document' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without_all(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_required_without_all(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
