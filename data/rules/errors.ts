import IRules from "../../types/rules"

const rules_errors: IRules = {
  id:        ['array', 'length:11', 'boolean'],
  is_active: ['string'],
  picture:   ['accepted', 'accepted_if:age,25'],
  password:  ['starts_with:423', 'ends_with:434', 'different:password_confirmation'],
  age:       ['confirmed', 'string'],
  other:     ['present'],
  locked:    [
    'after:10-08-2021',           'before:01-08-2021',
    'after_or_equal:10-08-2021',  'after_or_equal:07-08-2021',
    'before_or_equal:01-08-2021', 'before_or_equal:05-08-2021',
    'date_equals:07-08-2021',
    'date_format:yyyy-mm-ddd'
  ],
  email:     ['number'],
  latitude:  ['string', 'min:50', 'max:10'],
  longitude: ['array',  'min:10', 'max:1'],
  document:  ['required_without:favorite_friend_id'],
  about:     ['json'],
  guid:      ['mimes:mp4'],
  company:   ['image', 'regex:\\d+'],
  tags:      ['alpha_dash'],
  image:     ['string', 'mime_types:image/jpeg', 'size:10'],
  video:     ['image', 'mimes:png'],
  extra:     ['array'],
  none:      ['string']
}

export default rules_errors
