import values from "~/data/values";
import validator_prohibited_if from "~/validators/prohibited_if";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '',        rule_value: 'age,10,20' },
  { value: undefined, rule_value: 'favorite_fruit,arroz' },

  { value: '',        rule_value: 'age,25,20' },
  { value: undefined, rule_value: 'favorite_fruit,banana' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_prohibited_if(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_prohibited_if(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '12',      rule_value: 'age,25,20' },
  { value: null,      rule_value: 'favorite_fruit,banana' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_prohibited_if(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_prohibited_if(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
