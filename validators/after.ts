import { compare_date } from "@elpandev/helper"

const validator_after = (value: string, rule_value: string): boolean => {
  return compare_date(value, '>', rule_value)
}

export default validator_after