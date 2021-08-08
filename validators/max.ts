import validator_string from "./string"

const validator_max = (value: string|number, rule_value: string): boolean => {
  const value_length = validator_string(value)
    ? (value as string).length
    : value

  return value_length <= parseInt(rule_value)
}

export default validator_max