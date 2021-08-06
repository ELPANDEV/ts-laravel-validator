import validate_required from "./required"

const validate_required_without = (value: string, other_value: string): boolean => {
  return !validate_required(other_value)
    ? validate_required(value)
    : true
}

export default validate_required_without