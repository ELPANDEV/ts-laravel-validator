import IValues from "~/types/values"

const validator_confirmed = (key: string, values: IValues): boolean => {
  return values[`${key}_confirmation`] !== undefined
}

export default validator_confirmed