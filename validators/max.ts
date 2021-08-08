import validator_string from "./string"

const validator_max = (value: string, rule_value: string): boolean => {
  const validated = validator_string(value)
    ? value.length    <= rule_value.length
    : parseInt(value) <= rule_value.length

  return validated
}

export default validator_max