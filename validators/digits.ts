const validator_digits = (value: any, rule_value: string): boolean => {
  if (typeof value == 'number') {
    return `${value}`.length == parseInt(rule_value)
  }
  
  return false
}

export default validator_digits