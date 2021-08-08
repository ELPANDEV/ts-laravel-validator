import IMessages from "~/types/messages"
import IRules from "~/types/rules"
import IValues from "~/types/values"
import { Validator } from ".."

const values: IValues = {
  email: 9,
  name: 'elpandev'
}

const rules: IRules = {
  email:  ['string', 'number'],
  name:   ['string', 'number'],
  email2: ['string', 'number'],
}

const messages: IMessages = {
  email: {
    string: 'el campo :attr no es un string',
  }
}

const validator = new Validator(values, rules, messages)
const errors    = validator.validate()

test(`errors to have property email`, () => {
  expect(errors).toHaveProperty('email');
})

test(`errors to have property name`, () => {
  expect(errors).toHaveProperty('name');
})
