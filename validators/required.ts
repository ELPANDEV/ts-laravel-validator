const validate_required = (value: string): boolean => {
  return value.trim() !== ''
}

export default validate_required