import IValues from "../types/values"
import validator_prohibited from "./prohibited"

const validator_prohibited_unless = (value: any, rule_value: string, values: IValues): boolean => {
  const rule_values = rule_value.split(',')
  const rule_key    = rule_values.shift()

  if (rule_key) {
    let field = values[rule_key]
    
    if (field) {
      if (!rule_values.includes(`${field}`)) {
        return validator_prohibited(value)
      }
    }
  }
  
  return true
}

export default validator_prohibited_unless