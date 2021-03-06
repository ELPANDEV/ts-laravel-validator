const validator_mimes = (value: any, rule_value: string): boolean => {
  if (value instanceof File) {
    const mime_types = rule_value.split(',')

    return mime_types.some(mime_type => {
      return value.type.includes(mime_type)
    })
  }

  return false
}

export default validator_mimes