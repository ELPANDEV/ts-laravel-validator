import IValues from "~/types/values"

const validator_confirmed = (key: string, value: any, values: IValues): boolean => {
  return values[`${key}_confirmation`] ? true : false
}

export default validator_confirmed