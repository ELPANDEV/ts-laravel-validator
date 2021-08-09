import validator_max from "./max"
import validator_min from "./min"

const validator_between = (value: any, rule_value: string): boolean => {
  const [min, max] = rule_value.split(',')

  return (
    validator_min(value, min) &&
    validator_max(value, max)
  )
}

export default validator_between