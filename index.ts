import IErrorMessage from "./types/error-message";
import IErrors from "./types/errors";
import IMessages from "./types/messages";
import Rule from "./types/rule";
import IRules from "./types/rules";
import IValues from "./types/values";

import validate_number from "./validators/number"
import validate_string from "./validators/string"

class Validator {
  private values
  private rules
  private messages
  
  private validate: any = {
    string: validate_string,
    number: validate_number,
  }
  
  public errors: IErrors = {}

  constructor(values: IValues, rules: IRules, messages: IMessages) {
    this.values   = values
    this.rules    = rules
    this.messages = messages

    this.init()
  }

  private init() {
    for (const key in this.values) {
      const value = this.values[key]
      const rules = this.rules[key]

      rules?.forEach(rule => {
        if (!this.validate[rule](value)) {
          const custom_message      = this.messages[key]
          const custom_message_rule = custom_message ? custom_message[rule] : undefined

          const message = custom_message_rule
            ? custom_message_rule.replace(/:attr/g, key)
            : 'default message'

          if (message) {
            if (this.errors[key] == undefined) {
              this.errors[key] = []
            }

            this.errors[key].push(message)
          }
        }
      })
    }
  }
}

const values: IValues = {
  email: 9,
  name: 'elpandev'
}

const rules: IRules = {
  email: ['string', 'number'],
  name:  ['string', 'number'],
  email2: ['string', 'number'],
}

const messages: IMessages = {
  email: {
    string: 'el campo :attr no es un string',
  }
}

const validator = new Validator(values, rules, messages)

console.log(validator.errors)

export {
  IErrors,
  IMessages,
  IRules,
  IValues,
  IErrorMessage,
  Rule,
}

export {
  validate_number,
  validate_string,
}

export { Validator }