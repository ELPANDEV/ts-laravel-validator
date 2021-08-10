import rules_no_errors from "../data/rules/no_errors"
import values from "../data/values"
import Validator from ".."
import IValues from "../types/values"
import IRules from "../types/rules"
import IErrors from "../types/errors"

interface ITestData {
  payload: IValues,
  rules:   IRules,
  errors:  IErrors,
}

const data: ITestData[] = [
  {
    payload: {
      id: '61cab231af',
      balance: '$1,024.60',
      picture: 'http://placehold.it/32x32'
    },
    rules: {
      id:      ['sometimes', 'bail', 'number', 'array'],
      name:    ['sometimes', 'string', 'alpha'],
      balance: ['string', 'alpha', 'min:10', 'max:5'],
      picture: ['url', 'uuid', 'size:10']
    },
    errors: {
      id:      ['number'],
      balance: ['alpha', 'min'],
      picture: ['uuid', 'size'],
    }
  }
]

//#region no errors

data.forEach(({ payload, rules, errors }, index) => {
  const validator = new Validator(payload, rules)

  for (const key in errors) {
    const validator_messages = validator.errors[key]

    test(`errors to have property ${key}`, () => {
      expect(validator.errors).toHaveProperty(key);
    })

    errors[key].forEach((message, index) => {
      const validator_message = validator_messages[index]

      test(`validator_message to equal ${message}`, () => {
        expect(validator_message).toEqual(message);
      })
    });
  }
})

//#endregion
