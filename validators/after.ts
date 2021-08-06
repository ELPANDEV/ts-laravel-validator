import compare_date from "../methods/compare_date"
import RuleValue from "../types/rule_value"

const validator_after = (rule: RuleValue, value: string): boolean => {
  const rule_value = rule.split(':')[1]

  return compare_date(value, '>', rule_value)
}

export default validator_after