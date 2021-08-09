import values from "~/data/values"
import IMessages from "~/types/messages"
import IRules from "~/types/rules"
import { Validator } from ".."

const rules: IRules = {
  id:        ['required', 'string', 'length:10', 'alpha_num'],
  index:     ['different:id'],
  is_active: ['required', 'boolean', 'accepted', 'accepted_if:age,25'],
  picture:   ['url'],
  password:  ['confirmed', 'starts_with:123', 'ends_with:234', 'same:password_confirmation'],
  age:       ['present', 'integer'],
  locked:    ['required', 'string',
    'after:01-08-2021', 'before:10-08-2021',
    'after_or_equal:01-08-2021',  'after_or_equal:06-08-2021',
    'before_or_equal:10-08-2021', 'before_or_equal:06-08-2021',
    'date_equals:06-08-2021',
    'date_format:dd-mm-yyyy'
  ],
  email:     ['required', 'string', 'email'],
  latitude:  ['required', 'number', 'min:30', 'max:40'],
  longitude: ['required', 'number', 'min:5',  'max:10'],
  friends:   ['required', 'required_without:favorite_friend_id'],
  about:     ['required', 'string'],
  guid:      ['alpha_dash'],
  company:   ['alpha', 'regex:\\w+'],
  tags:      ['array'],
  image:     ['image', 'mime_types:image/png', 'size:0'],
  video:     ['file', 'mimes:mp4'],
  extra:     ['json'],
}

const messages: IMessages = {
  about: {
    max: 'el campo :attr tiene más de :value caracteres',
  }
}

const validator = new Validator(values, rules, messages)
const errors    = validator.validate()

console.log(errors)

test(`errors to equal 0`, () => {
  const errors_length = Object.keys(errors).length

  expect(errors_length).toEqual(0);
})
