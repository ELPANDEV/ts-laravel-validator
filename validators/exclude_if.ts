import TBreaker from "types/breaker"
import IValues from "types/values"

const validator_exclude_if = (rule_value: string, payload: IValues): TBreaker => {
  const [field_key, field_value] = rule_value.split(',')
  
  return payload[field_key] == field_value
    ? 'break'
    : 'continue'
}

export default validator_exclude_if