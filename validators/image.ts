const validator_image = (value: any): boolean => {
  if (value instanceof File) {
    return value.type.includes('image')
  }

  return false
}

export default validator_image