import validator_array from "./array"
import validator_file from "./file"
import validator_integer from "./integer"
import validator_string from "./string"

const validator_size = (value: any, rule_value: string): boolean => {
       if (validator_string(value))  return validator_size_string(value, rule_value)
  else if (validator_array(value))   return validator_size_array(value, rule_value)
  else if (validator_integer(value)) return validator_size_integer(value, rule_value)
  else if (validator_file(value))    return validator_size_file(value, rule_value)

  return false
}

const validator_size_string = (value: string, rule_value: string): boolean => {
  return value.length == parseInt(rule_value)
}

const validator_size_array = (value: any[], rule_value: string): boolean => {
  return value.length == parseInt(rule_value)
}

const validator_size_integer = (value: number, rule_value: string): boolean => {
  return value == parseInt(rule_value)
}

const validator_size_file = (value: File, rule_value: string): boolean => {
  return value.size == parseInt(rule_value)
}

export default validator_size