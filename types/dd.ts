import digit from "./digit"

type dd = `${'0'|'1'|'2'}${digit}` | `3${'0'|'1'}`

export default dd