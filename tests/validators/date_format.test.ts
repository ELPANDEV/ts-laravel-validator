import validator_date_format from "../../validators/date_format";

type values = {
  value:  string,
  format: string
}

//#region true

const permitted_values: values[] = [
  { value: '10-10-2020', format: 'dd-mm-yyyy' },
  { value: '2020-10-10', format: 'yyyy-mm-dd' },
  { value: '10-2020-10', format: 'dd-yyyy-mm' },
]

permitted_values.forEach(({ value, format }) => {
  test(`validator_date_format(${value}, ${format}) to equal true`, () => {
    expect(validator_date_format(value, format)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '10-10-20201', format: 'dd-mm-yyyy' },
  { value: '2020-100-10', format: 'yyyy-mm-dd' },
  { value: '1-2020-10',   format: 'dd-yyyy-mm' },
  { value: '10-2020-1',   format: 'dd-yyyy-mm' },
]

non_permitted_values.forEach(({ value, format }) => {
  test(`validator_date_format(${value}, ${format}) to equal false`, () => {
    expect(validator_date_format(value, format)).toEqual(false);
  })
})

//#endregion
