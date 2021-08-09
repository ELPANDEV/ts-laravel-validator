import validator_array from "./array"
import validator_file from "./file"
import validator_integer from "./integer"
import validator_string from "./string"

const validator_max = (value: any, rule_value: string): boolean => {
  const max = parseInt(rule_value)

       if (validator_string(value))  return value.length <= max
  else if (validator_array(value))   return value.length <= max
  else if (validator_integer(value)) return value        <= max
  else if (validator_file(value))    return value.size   <= max

  return false
}

export default validator_max