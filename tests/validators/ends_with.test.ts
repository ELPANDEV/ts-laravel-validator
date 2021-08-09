import validator_ends_with from "../../validators/ends_with";

type values = {
  value: string,
  end:   string
}

//#region true

const permitted_values: values[] = [
  { value: 'sjdjkejkjr',  end: 'kjr'      },
  { value: 'asdlqeriej',  end: 'iej,ej'   },
  { value: 'poiwertkjsd', end: 'jsd,sd,d' },
]

permitted_values.forEach(({ value, end }) => {
  test(`validator_ends_with(${value}, ${end}) to equal true`, () => {
    expect(validator_ends_with(value, end)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  { value: 'sjdjkejkjr',  end: 'kj'    },
  { value: 'asdlqeriej',  end: 'ri,as' },
  { value: 'poiwertkjsd', end: 'js,we' },
]

non_permitted_values.forEach(({ value, end }) => {
  test(`validator_ends_with(${value}, ${end}) to equal false`, () => {
    expect(validator_ends_with(value, end)).toEqual(false);
  })
})

//#endregion
