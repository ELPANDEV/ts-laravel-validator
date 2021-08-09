import validator_prohibited from "~/validators/prohibited";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '',        rule_value: ''  },
  { value: undefined, rule_value: ''  },
]

permitted_values.forEach(({ value }) => {
  test(`validator_prohibited(${value}) to equal true`, () => {
    expect(validator_prohibited(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '12', rule_value: ''  },
  { value: null, rule_value: ''  },
]

non_permitted_values.forEach(({ value }) => {
  test(`validator_prohibited(${value}) to equal false`, () => {
    expect(validator_prohibited(value)).toEqual(false);
  })
})

//#endregion
