import IValues from "~/types/values"

const validator_in_array = (value: any, rule_value: string, values: IValues): boolean => {
  const array = values[rule_value]

  if (array) return array.includes(value)
  
  return false
}

export default validator_in_array