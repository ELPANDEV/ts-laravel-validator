const validator_required = (value: any): boolean => {
  if (typeof value == 'string') return value.trim() != ''

  return ![null, undefined].includes(value)
}

export default validator_required