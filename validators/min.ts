const validate_min = (rule: string, value: string, type: string = 'number'): boolean => {
  const [key, length] = rule.split(':')

  const validated = type == 'string'
    ? value.length    >= parseInt(length)
    : parseInt(value) >= parseInt(length)

  return validated
}

export default validate_min