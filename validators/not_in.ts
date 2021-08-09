const validator_not_in = (value: any, rule_value: string): boolean => {
  const values = rule_value.split(',')

  return !values.includes(value)
}

export default validator_not_in