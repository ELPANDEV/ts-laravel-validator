import rules_errors from "../data/rules/errors"
import rules_no_errors from "../data/rules/no_errors"
import values from "../data/values"
import IMessages from "../types/messages"
import validate from ".."

//#region no errors

test(`errors to equal 0`, () => {
  const errors        = validate(values, rules_no_errors)
  const errors_length = Object.keys(errors).length

  expect(errors_length).toEqual(0);
})

//#endregion
//#region errors

const errors = validate(values, rules_errors)

const key_errors = [
  { key: 'id',        length: 3 },
  { key: 'is_active', length: 1 },
  { key: 'picture',   length: 2 },
  { key: 'password',  length: 3 },
  { key: 'age',       length: 2 },
  { key: 'other',     length: 1 },
  { key: 'locked',    length: 8 },
  { key: 'email',     length: 1 },
  { key: 'latitude',  length: 3 },
  { key: 'longitude', length: 3 },
  { key: 'longitude', length: 3 },
  { key: 'document',  length: 1 },
  { key: 'about',     length: 1 },
  { key: 'about',     length: 1 },
  { key: 'guid',      length: 1 },
  { key: 'company',   length: 2 },
  { key: 'tags',      length: 1 },
  { key: 'tags',      length: 1 },
  { key: 'image',     length: 3 },
  { key: 'video',     length: 2 },
  { key: 'extra',     length: 1 },
]

key_errors.forEach(({ key, length }) => {
  test(`errors to have property ${key}`, () => {
    expect(errors).toHaveProperty(key);
  })

  test(`errors.${key} to equal ${length}`, () => {
    expect(errors[key].length).toEqual(length);
  })
})

//#endregion
//#region message

const messages: IMessages = {
  about: {
    max: 'el campo :attr tiene más de :value caracteres',
  }
}

//#endregion
