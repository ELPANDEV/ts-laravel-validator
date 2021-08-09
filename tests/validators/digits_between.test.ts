import validator_digits_between from "../../validators/digits_between";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: 12345, rule_value: '5,10'  },
  { value: 987,   rule_value: '2,10'  },
  { value: 2546,  rule_value: '1,10'  },
  { value: 27582, rule_value: '-1,10' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_digits_between(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_digits_between(value, rule_value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '12345', rule_value: '5,10' },
  { value: '987',   rule_value: '3,10' },
  { value: 12345,   rule_value: '6,4'  },
  { value: 987,     rule_value: '4,2'  },
  { value: 2546,    rule_value: '-1,1' },
  { value: 27582,   rule_value: '2,3'  },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_digits_between(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_digits_between(value, rule_value)).toEqual(false);
  })
})

//#endregion
