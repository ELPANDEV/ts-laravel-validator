import RuleValue from "../types/rule_value"
import IValues from "../types/values"
import validator_required from "./required"

const validator_required_without = (rule_value: RuleValue, value: string, values: IValues): boolean => {
  const key = rule_value.split(':')[1]

  return !validator_required(values[key])
    ? validator_required(value)
    : true
}

export default validator_required_without