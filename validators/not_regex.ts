const validator_not_regex = (value: any, rule_value: string): boolean => {
  if (typeof value == 'string') {
    const match = value.match(new RegExp(rule_value))
    
    if (match) return match[0] != value
  }

  return true
}

export default validator_not_regex