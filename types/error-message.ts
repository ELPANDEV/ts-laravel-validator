import Rule from "./rule"

type IErrorMessage = {
  [key in Rule]?: string
}

export default IErrorMessage