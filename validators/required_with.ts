import IValues from "../types/values"
import validator_required from "./required"

const validator_required_with = (value: any, rule_value: string, payload: IValues): boolean => {
  const rule_values = rule_value.split(',')

  if (rule_values.some(key => validator_required(payload[key]))) {
    return validator_required(value)
  }

  return true
}

export default validator_required_with