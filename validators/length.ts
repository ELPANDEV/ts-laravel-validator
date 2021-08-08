const validator_length = (value: string, rule_value: string): boolean => {
  return value.length === rule_value.length 
}

export default validator_length