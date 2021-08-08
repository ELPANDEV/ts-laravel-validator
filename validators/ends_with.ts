const validator_ends_with = (value: any, rule_value: string): boolean => {
  const values = rule_value.split(',')

  return values.some(val => {
    return value.match(new RegExp(`${val}$`)) ? true : false
  })
}

export default validator_ends_with