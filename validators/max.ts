import RuleValue from "../types/rule_value"
import validator_string from "./string"

const validator_max = (rule: RuleValue, value: string): boolean => {
  const [key, length] = rule.split(':')

  const validated = validator_string(value)
    ? value.length    <= parseInt(length)
    : parseInt(value) <= parseInt(length)

  return validated
}

export default validator_max