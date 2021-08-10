import validator_date from "../../validators/date";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '10-10-2021', rule_value: '' },
  { value: '12-10-2021', rule_value: '' },
  { value: '10-10-1021', rule_value: '' },
  { value: '10-01-2021', rule_value: '' },
]

permitted_values.forEach(({ value }) => {
  test(`validator_date(${value}) to equal true`, () => {
    expect(validator_date(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '101-20-2021',  rule_value: '' },
  { value: '10-201-2021',  rule_value: '' },
  { value: '10-20-20211',  rule_value: '' },
  { value: '101-201-2021', rule_value: '' },
]

non_permitted_values.forEach(({ value }) => {
  test(`validator_date(${value}) to equal false`, () => {
    expect(validator_date(value)).toEqual(false);
  })
})

//#endregion
