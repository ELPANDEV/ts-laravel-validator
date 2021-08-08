import validator_regex from "./regex"

const validator_alpha = (value: any): boolean => {
  return validator_regex(value, '[a-zA-Z]+')
}

export default validator_alpha