import validator_array from "./array"
import validator_file from "./file"
import validator_integer from "./integer"
import validator_string from "./string"

const validator_size = (value: any, rule_value: string): boolean => {
  const size = parseInt(rule_value)

       if (validator_string(value))  return value.length == size
  else if (validator_array(value))   return value.length == size
  else if (validator_integer(value)) return value        == size
  else if (validator_file(value))    return value.size   == size

  return false
}

export default validator_size