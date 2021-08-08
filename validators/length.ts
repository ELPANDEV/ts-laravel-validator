const validator_length = (value: string, rule_value: string): boolean => {
  return value.length === parseInt(rule_value) 
}

export default validator_length