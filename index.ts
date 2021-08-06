import IErrorMessage from "./types/error-message";
import IErrors from "./types/errors";
import IMessages from "./types/messages";
import Rule from "./types/rule";
import IRules from "./types/rules";
import RuleValue from "./types/rule_value";
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

      rules_values?.forEach(rule_value => {
        const rule = rule_value.split(':')[0] as Rule

        if (!this.validate_rule(rule, rule_value, value)) {
          const custom_message      = this.messages[key]
          const custom_message_rule = custom_message ? custom_message[rule] : undefined

          const message = custom_message_rule
            ? custom_message_rule.replace(/:attr/g, key)
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

  private validate_rule(rule: Rule, rule_value: RuleValue, value: any): boolean {
    switch (rule) {
      case 'accepted':         return validator_accepted(value)
      case 'after':            return validator_after(rule_value, value)
      case 'before':           return validator_before(rule_value, value)
      case 'email':            return validator_email(value)
      case 'length':           return validator_length(rule_value, value)
      case 'max':              return validator_max(rule_value, value)
      case 'min':              return validator_min(rule_value, value)
      case 'number':           return validator_number(value)
      case 'required_without': return validator_required_without(value, 'aa')
      case 'required':         return validator_required(value)
      case 'string':           return validator_string(value)

      default: return false
    }
  }
}

const values: IValues = {
  mkey: null
}

const rules: IRules = {
  mkey: ['required']
}

const messages: IMessages = {

}

const validator = new Validator(values, rules, messages)

console.log(validator.validate())

export {
  IErrors,
  IMessages,
  IRules,
  IValues,
  IErrorMessage,
  Rule,
}

export { Validator }