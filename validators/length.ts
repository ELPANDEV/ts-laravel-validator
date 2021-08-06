const validate_length = (rule: string, value: string): boolean => {
  const [key, length] = rule.split(':')
  
  return value.length === parseInt(length) 
}

export default validate_length