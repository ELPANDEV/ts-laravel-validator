import validator_length from "~/validators/length";

//#region true

const permitted_values = [
  { value: 'wmonis.com',   length: '10' },
  { value: 'gbartell.org', length: '12' },
  { value: 'nch.com',      length: '7'  },
]

permitted_values.forEach(({ value, length }) => {
  test(`validator_length(${value}, ${length}) to equal true`, () => {
    expect(validator_length(value, length)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  { value: 'wmonis.com',   length: '9'  },
  { value: 'gbartell.org', length: '11' },
  { value: 'nch.com',      length: '-1' },
]

non_permitted_values.forEach(({ value, length }) => {
  test(`validator_length(${value}, ${length}) to equal false`, () => {
    expect(validator_length(value, length)).toEqual(false);
  })
})

//#endregion
