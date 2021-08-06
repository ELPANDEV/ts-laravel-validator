import RuleType from "./rule"

type IErrorMessage = {
  [key in RuleType]?: string
}

export default IErrorMessage