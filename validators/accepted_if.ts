import IValues from "../types/values"
import validator_accepted from "./accepted"

const validator_accepted_if = (value: string|number|boolean, rule_value: string, values: IValues): boolean => {
  const [key, key_value] = rule_value.split(',').map(e => e.trim())
  const should_validate  = `${values[key]}` == key_value

  return should_validate
    ? validator_accepted(value)
    : true
}

export default validator_accepted_if