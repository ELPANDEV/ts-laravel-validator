import validator_mimes from "~/validators/mimes";

type values = {
  value:      File,
  mimes: string
}

//#region true

const permitted_values: values[] = [
  { value: new File([new Blob()], 'name', { type: 'image/png' }), mimes: 'png,bmp' },
  { value: new File([new Blob()], 'name', { type: 'image/bmp' }), mimes: 'bmp' },
  { value: new File([new Blob()], 'name', { type: 'image/gif' }), mimes: 'gif,bmp' },
]

permitted_values.forEach(({ value, mimes }) => {
  test(`validator_mimes(${value}, ${mimes}) to equal true`, () => {
    expect(validator_mimes(value, mimes)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: new File([new Blob()], 'name', { type: 'font/ttf' }),        mimes: 'png' },
  { value: new File([new Blob()], 'name', { type: 'application/pdf' }), mimes: 'bmp' },
  { value: new File([new Blob()], 'name', { type: 'text/plain' }),      mimes: 'gif,bmp' },
]

non_permitted_values.forEach(({ value, mimes }) => {
  test(`validator_mimes(${value}, ${mimes}) to equal false`, () => {
    expect(validator_mimes(value, mimes)).toEqual(false);
  })
})

//#endregion
