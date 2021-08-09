import { length } from "@elpandev/helper"

const validator_min = (value: any, rule_value: string): boolean => {
  return length(value) >= parseInt(rule_value)
}

export default validator_min