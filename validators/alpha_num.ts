import validator_regex from "./regex"

const validator_alpha_num = (value: any): boolean => {
  return validator_regex(value, '[a-zA-Z\\d]+')
}

export default validator_alpha_num