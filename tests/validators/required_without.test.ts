import IValues from "~/types/values";
import validator_required_without from "~/validators/required_without";

type values = {
  value:      any,
  rule_value: string,
}

const values: IValues = {
  name:    null,
  email:   undefined,
  country: '',
  city:    'ibarra',
  phone:   12345
} 

//#region true

const permitted_values: values[] = [
  { value: 'value',   rule_value: 'email'   },
  { value: 'value',   rule_value: 'name'    },
  { value: 'value',   rule_value: 'country' },
  { value: 'value',   rule_value: 'role'    },
  { value: null,      rule_value: 'city'    },
  { value: undefined, rule_value: 'phone'   },
  { value: '',        rule_value: 'city'    },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_required_without(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: null,      rule_value: 'name'  },
  { value: undefined, rule_value: 'email' },
  { value: '',        rule_value: 'role'  },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_required_without(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_required_without(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
