import RuleValue from "../types/rule_value"

const validator_length = (rule: RuleValue, value: string): boolean => {
  const [key, length] = rule.split(':')
  
  return value.length === parseInt(length) 
}

export default validator_length