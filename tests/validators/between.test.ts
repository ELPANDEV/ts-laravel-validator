import validator_between from "~/validators/between";

type values = {
  value:      string|number|any[]|File,
  rule_value: string
}

const image = new File([], 'name', { type: 'image/png' })

//#region true

const permitted_values: values[] = [
  { value: image,      rule_value: '0,20' },
  { value: 10,         rule_value: '9,20' },
  { value: 'elpandev', rule_value: '7,20' },
  { value: ['a', 'b'], rule_value: '1,10' },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_between(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_between(value, rule_value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: image,      rule_value: '1,20'  },
  { value: 10,         rule_value: '11,20' },
  { value: 'elpandev', rule_value: '10,20' },
  { value: ['a', 'b'], rule_value: '3,10'  },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_between(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_between(value, rule_value)).toEqual(false);
  })
})

//#endregion
