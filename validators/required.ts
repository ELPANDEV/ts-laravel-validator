import validator_string from "./string"

const validator_required = (value: any): boolean => {
  if (validator_string(value)) return value.trim() != ''

  return ![null, undefined].includes(value)
}

export default validator_required