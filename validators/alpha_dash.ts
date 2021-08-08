const validator_alpha_dash = (value: any): boolean => {
  if (typeof value == 'string') {
    const match = value.match(/[a-zA-Z\-_\d]+/)
    
    if (match) return match[0] == value
  }

  return false
}

export default validator_alpha_dash