const validator_multiple_of = (value: any, rule_value: string): boolean => {
  if (typeof value == 'number') {
    return value % parseInt(rule_value) == 0
  }

  return false
}

export default validator_multiple_of