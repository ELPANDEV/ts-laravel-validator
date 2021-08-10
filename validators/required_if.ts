import IValues from "../types/values"
import validator_required from "./required"

const validator_required_if = (value: any, rule_value: string, payload: IValues): boolean => {
  const rule_values = rule_value.split(',')
  const field_key   = rule_values.shift()!

  if (rule_values.includes(`${payload[field_key]}`)) {
    return validator_required(value)
  }

  return true
}

export default validator_required_if