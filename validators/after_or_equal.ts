import compare_date from "~/methods/compare_date"

const validator_after_or_equal = (value: any, rule_value: string): boolean => {
  return compare_date(value, '>=', rule_value)
}

export default validator_after_or_equal