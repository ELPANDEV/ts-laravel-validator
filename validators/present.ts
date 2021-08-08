import IValues from "~/types/values"

const validator_present = (key: string, values: IValues): boolean => {
  return values[key] !== undefined
}

export default validator_present