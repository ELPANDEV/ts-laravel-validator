import { compare_date } from "@elpandev/helper"

const validator_date_equals = (value: any, rule_value: string): boolean => {
  return compare_date(value, '==', rule_value)
}

export default validator_date_equals