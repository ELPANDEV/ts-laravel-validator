import values from "../../data/values";
import validator_exclude_unless from "../../validators/exclude_unless";

type values = {
  value:      any,
  rule_value: string
}

//#region break

const break_values: values[] = [
  { value: null, rule_value: 'name,Jessie Logan1' },
  { value: null, rule_value: 'email,jessielogan@ebidco.com1' },
]

break_values.forEach(({ rule_value }) => {
  test(`validator_exclude_unless(${rule_value}) to equal 'break'`, () => {
    expect(validator_exclude_unless(rule_value, values)).toEqual('break');
  })
})

//#endregion
//#region continue

const continue_values: values[] = [
  { value: null, rule_value: 'name,Jessie Logan' },
  { value: null, rule_value: 'email,jessielogan@ebidco.com' },
]

continue_values.forEach(({ rule_value }) => {
  test(`validator_exclude_unless(${rule_value}) to equal 'continue'`, () => {
    expect(validator_exclude_unless(rule_value, values)).toEqual('continue');
  })
})

//#endregion
