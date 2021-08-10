import IValues from "types/values";
import validator_exclude_if from "../../validators/exclude_if";

type values = {
  value:      any,
  rule_value: string
}

const payload = {
  name: 'ELPANDEV',
  email: 'javoavmystery@gmail.com'
}

//#region break

const break_values: values[] = [
  { value: null, rule_value: 'name,ELPANDEV' },
  { value: null, rule_value: 'email,javoavmystery@gmail.com' },
]

break_values.forEach(({ rule_value }) => {
  test(`validator_exclude_if(${rule_value}) to equal 'break'`, () => {
    expect(validator_exclude_if(rule_value, payload)).toEqual('break');
  })
})

//#endregion
//#region continue

const continue_values: values[] = [
  { value: null, rule_value: 'name,ELPANDEV1' },
  { value: null, rule_value: 'email,javoavmystery@gmail.com1' },
]

continue_values.forEach(({ rule_value }) => {
  test(`validator_exclude_if(${rule_value}) to equal 'continue'`, () => {
    expect(validator_exclude_if(rule_value, payload)).toEqual('continue');
  })
})

//#endregion
