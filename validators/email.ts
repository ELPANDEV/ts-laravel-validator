const validator_email = (value: string): boolean => {
  const regex = new RegExp(/.+@.+\..+/)

  return regex.test(value.toLowerCase())
}

export default validator_email