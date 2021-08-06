import compare_date from "../methods/compare_date"
import date_to_format from "../methods/date_to_format"

const validate_before = (rule: string, value: string): boolean => {
  const [key, rule_value] = rule.split(':')

  if (rule_value == 'today') return compare_date(value, '<', date_to_format(new Date(), 'yyyy-mm-dd'))

  return false
}

export default validate_before