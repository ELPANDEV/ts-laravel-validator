import validator_file from "~/validators/file";

//#region true

const permitted_values = [
  new File([new Blob()], 'name', { type: 'image/png' }),
  new File([new Blob()], 'name', { type: 'application/pdf' }),
  new File([new Blob()], 'name', { type: 'video/mp4' }),
]

permitted_values.forEach(value => {
  test(`validator_file(${value}) to equal true`, () => {
    expect(validator_file(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  '123.092',
  12.12,
  'file',
  true,
  0,
  null,
  undefined
]

non_permitted_values.forEach(value => {
  test(`validator_file(${value}) to equal false`, () => {
    expect(validator_file(value)).toEqual(false);
  })
})

//#endregion
