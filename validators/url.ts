const validator_url = (value: any): boolean => {
  const regex = new RegExp(/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)

  return value.match(regex) ? true : false
}

export default validator_url