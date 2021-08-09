import IErrors from "./types/errors";
import IMessages from "./types/messages";
import RuleKey from "./types/rule_key";
import IRules from "./types/rules";
import IValues from "./types/values";

import validator_accepted from "./validators/accepted";
import validator_after from "./validators/after";
import validator_before from "./validators/before";
import validator_email from "./validators/email";
import validator_length from "./validators/length";
import validator_max from "./validators/max";
import validator_min from "./validators/min";
import validator_number from "./validators/number"
import validator_required from "./validators/required";
import validator_required_without from "./validators/required_without";
import validator_string from "./validators/string"
import validator_accepted_if from "./validators/accepted_if";
import validator_after_or_equal from "./validators/after_or_equal";
import validator_alpha_dash from "./validators/alpha_dash";
import validator_alpha_num from "./validators/alpha_num";
import validator_array from "./validators/array";
import validator_before_or_equal from "./validators/before_or_equal";
import validator_boolean from "./validators/boolean";
import validator_confirmed from "./validators/confirmed";
import validator_date_equals from "./validators/date_equals";
import validator_date_format from "./validators/date_format";
import validator_different from "./validators/different";
import validator_ends_with from "./validators/ends_with";
import validator_file from "./validators/file";
import validator_image from "./validators/image";
import validator_integer from "./validators/integer";
import validator_json from "./validators/json";
import validator_mime_types from "./validators/mime_types";
import validator_mimes from "./validators/mimes";
import validator_present from "./validators/present";
import validator_regex from "./validators/regex";
import validator_same from "./validators/same";
import validator_size from "./validators/size";
import validator_starts_with from "./validators/starts_with";
import validator_url from "./validators/url";

class Validator {
  private values
  private rules
  private messages
  
  constructor(values: IValues, rules: IRules, messages?: IMessages) {
    this.values   = values
    this.rules    = rules
    this.messages = messages
  }

  public validate(): IErrors {
    const errors: IErrors = {}

    for (const key in this.rules) {      
      const rules = this.rules[key]
      const value = this.values[key]

      rules.forEach(rule => {
        const [rule_key, rule_value] = rule.split(':') as [RuleKey, string]

        if (!this.validate_rule(key, rule_key, rule_value, value, this.values)) {
          const custom_message      = this.messages ? this.messages[key] : null
          const custom_message_rule = custom_message ? custom_message[rule_key] : undefined

          const message = custom_message_rule
            ? custom_message_rule
            : 'el campo :attr no cumple con la regla :rule'

          if (errors[key] == undefined) {
            errors[key] = []
          }

          errors[key].push(
            message
              .replace(/:attr/g,  key)
              .replace(/:value/g, rule_value)
              .replace(/:rule/g,  rule_key)
          )
        }
      })
    }

    return errors
  }

  private validate_rule(key: string, rule_key: RuleKey, rule_value: string, value: any, values: IValues): boolean {
    switch (rule_key) {
      case 'accepted_if':      return validator_accepted_if(value, rule_value, values)
      case 'accepted':         return validator_accepted(value)
      case 'after_or_equal':   return validator_after_or_equal(value, rule_value)
      case 'after':            return validator_after(value, rule_value)
      case 'alpha_dash':       return validator_alpha_dash(value)
      case 'alpha_num':        return validator_alpha_num(value)
      case 'alpha':            return validator_alpha_num(value)
      case 'array':            return validator_array(value)
      case 'before_or_equal':  return validator_before_or_equal(value, rule_value)
      case 'before':           return validator_before(value, rule_value)
      case 'boolean':          return validator_boolean(value)
      case 'confirmed':        return validator_confirmed(key, values)
      case 'date_equals':      return validator_date_equals(value, rule_value)
      case 'date_format':      return validator_date_format(value, rule_value)
      case 'different':        return validator_different(value, rule_value, values)
      case 'email':            return validator_email(value)
      case 'ends_with':        return validator_ends_with(value, rule_value)
      case 'file':             return validator_file(value)
      case 'image':            return validator_image(value)
      case 'integer':          return validator_integer(value)
      case 'json':             return validator_json(value)
      case 'length':           return validator_length(value, rule_value)
      case 'max':              return validator_max(value, rule_value)
      case 'mime_types':       return validator_mime_types(value, rule_value)
      case 'mimes':            return validator_mimes(value, rule_value)
      case 'min':              return validator_min(value, rule_value)
      case 'number':           return validator_number(value)
      case 'present':          return validator_present(key, values)
      case 'regex':            return validator_regex(value, rule_value)
      case 'required_without': return validator_required_without(value, rule_value, values)
      case 'required':         return validator_required(value)
      case 'same':             return validator_same(value, rule_value, values)
      case 'size':             return validator_size(value, rule_value)
      case 'starts_with':      return validator_starts_with(value, rule_value)
      case 'string':           return validator_string(value)
      case 'url':              return validator_url(value)

      default: return true
    }
  }
}

export {
  IMessages,
  IRules,
  IValues,
}

export default Validator