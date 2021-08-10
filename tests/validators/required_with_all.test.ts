import values from "../../data/values";
import validator_required_with_all from "../../validators/required_with_all";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '1',   rule_value: 'favorite_fruit,age' },
  { value: true,  rule_value: 'age,password' },
  { value: 'asd', rule_value: 'favorite_fruit,gender' },
  { value: null,  rule_value: 'password,favorite_fruit_id' },
  { value: '',    rule_value: 'favorite_fruit_id' },
  { value: [],    rule_value: 'document' },
  { value: null,  rule_value: 'document,favorite_fruit_id' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_with_all(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_required_with_all(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '',        rule_value: 'age,password' },
  { value: [],        rule_value: 'favorite_fruit,gender' },
  { value: [],        rule_value: 'favorite_fruit,age' },
  { value: undefined, rule_value: 'age,password' },
  { value: null,      rule_value: 'favorite_fruit,gender' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_with_all(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_required_with_all(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
