import validator_required from "./required"

const validator_required_without = (value: string, other_value: string): boolean => {
  return !validator_required(other_value)
    ? validator_required(value)
    : true
}

export default validator_required_without