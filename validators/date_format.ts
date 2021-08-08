import validator_regex from "./regex"

const validator_date_format = (value: any, rule_value: string): boolean => {
  const regex = rule_value
    .replace('dd',   '\\d{2}')
    .replace('mm',   '\\d{2}')
    .replace('yyyy', '\\d{4}')

  return validator_regex(value, regex)
}

export default validator_date_format