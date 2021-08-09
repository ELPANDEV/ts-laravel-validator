import validator_starts_with from "../../validators/starts_with";

type values = {
  value: string,
  start: string
}

//#region true

const permitted_values: values[] = [
  { value: 'sjdjkejkjr',  start: 'sjd'      },
  { value: 'asdlqeriej',  start: 'asd,as'   },
  { value: 'poiwertkjsd', start: 'poi,po,p' },
]

permitted_values.forEach(({ value, start }) => {
  test(`validator_starts_with(${value}, ${start}) to equal true`, () => {
    expect(validator_starts_with(value, start)).toEqual(true);
  })
})

//#startregion
//#region false

const non_permitted_values = [
  { value: 'sjdjkejkjr',  start: 'kj'       },
  { value: 'asdlqeriej',  start: 'ri,dl'    },
  { value: 'poiwertkjsd', start: 'js,we,sd' },
]

non_permitted_values.forEach(({ value, start }) => {
  test(`validator_starts_with(${value}, ${start}) to equal false`, () => {
    expect(validator_starts_with(value, start)).toEqual(false);
  })
})

//#startregion
