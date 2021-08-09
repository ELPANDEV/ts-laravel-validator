import { length } from "@elpandev/helper"

const validator_size = (value: any, rule_value: string): boolean => {
  return length(value) == parseInt(rule_value)
}

export default validator_size