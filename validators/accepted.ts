const validator_accepted = (value: string|number|boolean): boolean => {
  return ['yes', 'no', 1, true].includes(value)
}

export default validator_accepted