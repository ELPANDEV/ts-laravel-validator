import validator_size from "../../validators/size";

type values = {
  value: string|number|any[]|File,
  size:  string
}

//#region true

const permitted_values: values[] = [
  { value: new File([], 'name', { type: 'image/png' }), size: '0' },
  { value: 10,         size: '10' },
  { value: 'elpandev', size: '8' },
  { value: ['a', 'b'], size: '2' },
]

permitted_values.forEach(({ value, size }) => {
  test(`validator_size(${value}, ${size}) to equal true`, () => {
    expect(validator_size(value, size)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: new File([new Blob()], 'name', { type: 'image/png' }), size: '100' },
  { value: 10,         size: '11' },
  { value: 'elpandev', size: '9' },
  { value: ['a', 'b'], size: '3' },
]

non_permitted_values.forEach(({ value, size }) => {
  test(`validator_size(${value}, ${size}) to equal false`, () => {
    expect(validator_size(value, size)).toEqual(false);
  })
})

//#endregion
