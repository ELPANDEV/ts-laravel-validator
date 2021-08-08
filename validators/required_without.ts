import IValues from "../types/values"
import validator_required from "./required"

const validator_required_without = (value: string, rule_value: string, values: IValues): boolean => {
  return !validator_required(values[rule_value])
    ? validator_required(value)
    : true
}

export default validator_required_without