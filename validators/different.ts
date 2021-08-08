import IValues from "~/types/values"

const validator_different = (value: any, rule_value: string, values: IValues): boolean => {
  return values[rule_value] != value
}

export default validator_different