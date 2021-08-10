import validator_regex from "./regex"

const validator_uuid = (value: any): boolean => {
  return validator_regex(value, '^([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})|[0-9]+$')
}

export default validator_uuid