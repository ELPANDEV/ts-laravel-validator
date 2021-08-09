import length from "~/methods/length"
import IValues from "~/types/values"

const validator_lte = (value: any, rule_value: string, values: IValues): boolean => {
  const field = values[rule_value]

  if (field) return length(value) <= length(field)
  
  return false
}

export default validator_lte