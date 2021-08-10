import { length } from "@elpandev/helper"

const validator_required = (value: any): boolean => {
  if ([null, undefined].includes(value)) return false

  if (!['number', 'boolean'].includes(typeof value)) {
    return length(value) > 0
  }

  return true
}

export default validator_required