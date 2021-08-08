import validator_regex from "./regex"

const validator_alpha_dash = (value: any): boolean => {
  return validator_regex(value, '[a-zA-Z\-_]+')
}

export default validator_alpha_dash