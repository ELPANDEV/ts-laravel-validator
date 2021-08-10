import validator_regex from "./regex"

const validator_date = (value: any): boolean => {
  return validator_regex(value, '\\d{2}-\\d{2}-\\d{4}')
}

export default validator_date