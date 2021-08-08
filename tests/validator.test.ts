import values from "~/data/values"
import IMessages from "~/types/messages"
import IRules from "~/types/rules"
import { Validator } from ".."

const rules: IRules = {
  id:        ['required', 'string', 'length:10'],
  is_active: ['required', 'accepted'],
  locked:    ['required', 'string', 'after:01-08-2021', 'before:10-08-2021'],
  email:     ['required', 'string', 'email'],
  latitude:  ['required', 'number', 'min:30', 'max:40'],
  longitude: ['required', 'number', 'min:5',  'max:10'],
  friends:   ['required', 'required_without:favorite_friend_id'],
  about:     ['required', 'string', 'max:10']
}

const messages: IMessages = {
  about: {
    max: 'el campo :attr tiene más de :value caracteres',
  }
}

const validator = new Validator(values, rules, messages)
const errors    = validator.validate()

test(`errors have property about`, () => {
  expect(errors).toHaveProperty('about');
})
