const validator_integer = (value: any): boolean => {
  if (typeof value == 'number') {
    return value % 1 == 0
  }

  return false
}

export default validator_integer