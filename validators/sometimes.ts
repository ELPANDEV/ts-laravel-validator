import TBreaker from "../types/breaker"
import IValues from "../types/values"
import validator_present from "./present"

const validator_sometimes = (key: string, payload: IValues): TBreaker => {
  return validator_present(key, payload)
    ? 'continue'
    : 'break'
}

export default validator_sometimes