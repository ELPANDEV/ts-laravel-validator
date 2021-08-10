import values from "../../data/values";
import validator_required_without from "../../validators/required_without";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '1',   rule_value: 'favorite_fruit,document' },
  { value: true,  rule_value: 'favorite_fruit_id' },
  { value: 'asd', rule_value: 'document,gender' },
  { value: [1],   rule_value: 'password,favorite_fruit_id' },
  { value: '1',   rule_value: 'favorite_fruit_id' },
  { value: [2],   rule_value: 'document' },
  { value: 5,     rule_value: 'document,favorite_fruit_id' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_required_without(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '',    rule_value: 'age,password,favorite_fruit_id' },
  { value: [],    rule_value: 'document,age' },
  { value: null,  rule_value: 'favorite_fruit_id' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_required_without(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
