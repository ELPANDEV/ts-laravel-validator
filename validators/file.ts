const validator_file = (value: any): boolean => {
  return value instanceof File
}

export default validator_file