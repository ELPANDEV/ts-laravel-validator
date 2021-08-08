import validator_min from "~/validators/min";

//#region true

const permitted_values = [
  { value: 'gbartell.org', min: '11' },
  { value: 'nch.com',      min: '7'  },

  { value: 20, min: '19' },
  { value: 7,  min: '7'  },
]

permitted_values.forEach(({ value, min }) => {
  test(`validator_min(${value}, ${min}) to equal true`, () => {
    expect(validator_min(value, min)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  { value: 'gbartell.org', min: '20' },
  { value: 'nch.com',      min: '8'  },

  { value: 20, min: '21' },
  { value: 7,  min: '8'  },
]

non_permitted_values.forEach(({ value, min }) => {
  test(`validator_min(${value}, ${min}) to equal false`, () => {
    expect(validator_min(value, min)).toEqual(false);
  })
})

//#endregion
