import Rule from "types/rule";
import RuleKey from "types/rule_key";
import IValues from "types/values";

interface IValidationData {
  key:        string
  value:      any
  values:     IValues
  rule_key:   RuleKey
  rule_value: string
  rules:      Rule[]
}

export default IValidationData