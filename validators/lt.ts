import { length } from "@elpandev/helper"
import IValues from "../types/values"

const validator_lt = (value: any, rule_value: string, values: IValues): boolean => {
  const field = values[rule_value]

  if (field) return length(value) < length(field)
  
  return false
}

export default validator_lt