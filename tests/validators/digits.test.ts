import validator_digits from "~/validators/digits";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: 12345, rule_value: '5' },
  { value: 987,   rule_value: '3' },
  { value: 2546,  rule_value: '4' },
  { value: 27582, rule_value: '5' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_digits(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_digits(value, rule_value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '12345', rule_value: '5'  },
  { value: '987',   rule_value: '3'  },
  { value: 12345,   rule_value: '6'  },
  { value: 987,     rule_value: '1'  },
  { value: 2546,    rule_value: '-1' },
  { value: 27582,   rule_value: '2'  },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_digits(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_digits(value, rule_value)).toEqual(false);
  })
})

//#endregion
