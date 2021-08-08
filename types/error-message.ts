import Rule from "./rule_key"

type IErrorMessage = {
  [key in Rule]?: string
}

export default IErrorMessage