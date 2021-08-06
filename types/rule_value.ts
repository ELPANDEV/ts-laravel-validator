type RuleValue =
  'accepted'|
  `after:${number}-${number}-${number}`|
  `before:${number}-${number}-${number}`|
  'email'|
  `length:${number}`|
  `max:${number}`|
  `min:${number}`|
  'number'|
  `required_without:${string}`|
  'required'|
  'string'

export default RuleValue