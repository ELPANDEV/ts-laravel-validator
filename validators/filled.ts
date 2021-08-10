import IValues from "../types/values"
import validator_present from "./present"
import validator_required from "./required"

const validator_filled = (key: string, value: any, payload: IValues): boolean => {
  if (validator_present(key, payload)) {
    return validator_required(value)
  }

  return true
}

export default validator_filled