const validator_boolean = (value: any): boolean => {
  return [true, false, 1, 0, '1', '0'].includes(value)
}

export default validator_boolean