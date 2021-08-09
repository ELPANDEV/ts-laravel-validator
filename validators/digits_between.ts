const validator_digits_between = (value: any, rule_value: string): boolean => {
  if (typeof value == 'number') {
    const length     = `${value}`.length 
    const [min, max] = rule_value.split(',').map(e => parseInt(e))

    return (
      length >= min &&
      length <= max
    )
  }
  
  return false
}

export default validator_digits_between