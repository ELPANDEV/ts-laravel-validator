import validator_array from "./array"
import validator_file from "./file"
import validator_integer from "./integer"
import validator_string from "./string"

const validator_min = (value: any, rule_value: string): boolean => {
  const min = parseInt(rule_value)

       if (validator_string(value))  return value.length >= min
  else if (validator_array(value))   return value.length >= min
  else if (validator_integer(value)) return value        >= min
  else if (validator_file(value))    return value.size   >= min

  return false
}

export default validator_min