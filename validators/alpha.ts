const validator_alpha = (value: any): boolean => {
  if (typeof value == 'string') {
    const match = value.match(/[a-zA-Z\d]+/)
    
    if (match) return match[0] == value
  }

  return false
}

export default validator_alpha