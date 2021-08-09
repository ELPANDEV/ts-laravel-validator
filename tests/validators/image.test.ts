import validator_image from "~/validators/image";

//#region true

const permitted_values = [
  new File([new Blob()], 'name', { type: 'image/png' }),
  new File([new Blob()], 'name', { type: 'image/bmp' }),
  new File([new Blob()], 'name', { type: 'image/gif' }),
]

permitted_values.forEach(value => {
  test(`validator_image(${value}) to equal true`, () => {
    expect(validator_image(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  new File([new Blob()], 'name', { type: 'font/ttf' }),
  new File([new Blob()], 'name', { type: 'application/pdf' }),
  new File([new Blob()], 'name', { type: 'text/plain' }),
  null,
  undefined
]

non_permitted_values.forEach(value => {
  test(`validator_image(${value}) to equal false`, () => {
    expect(validator_image(value)).toEqual(false);
  })
})

//#endregion
