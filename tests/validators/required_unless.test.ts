import values from "../../data/values";
import validator_required_unless from "../../validators/required_unless";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '1',       rule_value: 'favorite_fruit,banana' },
  { value: true,      rule_value: 'age,25' },
  { value: false,     rule_value: 'password,1234' },
  { value: [1, 2],    rule_value: 'gender,female' },
  { value: '',        rule_value: 'favorite_fruit,banana' },
  { value: undefined, rule_value: 'age,25' },
  { value: [],        rule_value: 'password,1234' },
  { value: null,      rule_value: 'gender,female' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_unless(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_required_unless(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '',        rule_value: 'favorite_fruit,banana1' },
  { value: undefined, rule_value: 'age,251' },
  { value: [],        rule_value: 'password,12341' },
  { value: null,      rule_value: 'gender,female1' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_unless(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_required_unless(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
