const validator_prohibited = (value: any): boolean => {
  return ['', undefined].includes(value)
}

export default validator_prohibited