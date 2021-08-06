type RuleValue =
  'accepted'|
  `after:${number}${number}-${number}${number}-${number}${number}${number}${number}`|
  `before:${number}${number}-${number}${number}-${number}${number}${number}${number}`|
  'email'|
  `length:${number}`|
  `max:${number}`|
  `min:${number}`|
  'number'|
  `required_without`|
  'required'|
  'string'

export default RuleValue