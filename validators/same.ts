import IValues from "~/types/values"

const validator_same = (value: any, rule_value: string, values: IValues): boolean => {
  return values[rule_value] == value
}

export default validator_same