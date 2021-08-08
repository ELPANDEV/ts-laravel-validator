import IErrorMessage from "./types/error-message";
import IErrors from "./types/errors";
import IMessages from "./types/messages";
import RuleKey from "./types/rule_key";
import IRules from "./types/rules";
import Rule from "./types/rule";
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

class Validator {
  private values
  private rules
  private messages
  
  constructor(values: IValues, rules: IRules, messages: IMessages) {
    this.values   = values
    this.rules    = rules
    this.messages = messages
  }

  public validate(): IErrors {
    const errors: IErrors = {}

    for (const key in this.values) {
      const value        = this.values[key]
      const rules_values = this.rules[key]

      rules_values?.forEach(rule => {
        const [rule_key, rule_value] = rule.split(':') as [RuleKey, string]

        if (!this.validate_rule(rule_key, rule_value, value, this.values)) {
          const custom_message      = this.messages[key]
          const custom_message_rule = custom_message ? custom_message[rule_key] : undefined

          const message = custom_message_rule
            ? custom_message_rule.replace(/:attr/g, key).replace(/:value/g, rule_value)
            : 'default message'

          if (message) {
            if (errors[key] == undefined) {
              errors[key] = []
            }

            errors[key].push(message)
          }
        }
      })
    }

    return errors
  }

  private validate_rule(rule_key: RuleKey, rule_value: string, value: any, values: IValues): boolean {
    switch (rule_key) {
      case 'accepted':         return validator_accepted(value)
      case 'after':            return validator_after(value, rule_value)
      case 'before':           return validator_before(value, rule_value)
      case 'email':            return validator_email(value)
      case 'length':           return validator_length(value, rule_value)
      case 'max':              return validator_max(value, rule_value)
      case 'min':              return validator_min(value, rule_value)
      case 'number':           return validator_number(value)
      case 'required_without': return validator_required_without(value, rule_value, values)
      case 'required':         return validator_required(value)
      case 'string':           return validator_string(value)

      default: return false
    }
  }
}

export {
  IErrorMessage,
  IErrors,
  IMessages,
  Rule,
  RuleKey,
  IRules,
  IValues,
}

export { Validator }