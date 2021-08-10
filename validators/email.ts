const validator_email = (value: string): boolean => {
  const regex = new RegExp(/.+@.+\..+/)

  return regex.test(value)
}

export default validator_email