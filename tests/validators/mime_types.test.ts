import validator_mime_types from "~/validators/mime_types";

type values = {
  value:      File,
  mime_types: string
}

//#region true

const permitted_values: values[] = [
  { value: new File([new Blob()], 'name', { type: 'image/png' }), mime_types: 'image/png,image/bmp,' },
  { value: new File([new Blob()], 'name', { type: 'image/bmp' }), mime_types: 'image/bmp' },
  { value: new File([new Blob()], 'name', { type: 'image/gif' }), mime_types: 'image/gif,image/bmp' },
]

permitted_values.forEach(({ value, mime_types }) => {
  test(`validator_mime_types(${value}, ${mime_types}) to equal true`, () => {
    expect(validator_mime_types(value, mime_types)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: new File([new Blob()], 'name', { type: 'font/ttf' }),        mime_types: 'image/png' },
  { value: new File([new Blob()], 'name', { type: 'application/pdf' }), mime_types: 'image/bmp' },
  { value: new File([new Blob()], 'name', { type: 'text/plain' }),      mime_types: 'image/gif,image/bmp' },
]

non_permitted_values.forEach(({ value, mime_types }) => {
  test(`validator_mime_types(${value}, ${mime_types}) to equal false`, () => {
    expect(validator_mime_types(value, mime_types)).toEqual(false);
  })
})

//#endregion
