import validator_max from "../../validators/max";

//#region true

const permitted_values = [
  { value: 'gbartell.org', max: '20' },
  { value: 'nch.com',      max: '7'  },

  { value: 19, max: '20' },
  { value: 7,  max: '7'  },
]

permitted_values.forEach(({ value, max }) => {
  test(`validator_max(${value}, ${max}) to equal true`, () => {
    expect(validator_max(value, max)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  { value: 'gbartell.org', max: '1' },
  { value: 'nch.com',      max: '6'  },

  { value: 19, max: '1' },
  { value: 7,  max: '6'  },
]

non_permitted_values.forEach(({ value, max }) => {
  test(`validator_max(${value}, ${max}) to equal false`, () => {
    expect(validator_max(value, max)).toEqual(false);
  })
})

//#endregion
