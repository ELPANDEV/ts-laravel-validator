import values from "~/data/values";
import validator_accepted_if from "~/validators/accepted_if";

type values = {
  value:      any,
  rule_value: string,
}

//#region true

const permitted_values: values[] = [
  { value: 'yes', rule_value: 'age,25'             },
  { value: 'no',  rule_value: 'is_active,true'     },
  { value: 1,     rule_value: 'eye_color,green'    },
  { value: true,  rule_value: 'latitude,32.263258' },

  { value: 'a',   rule_value: 'age,26'             },
  { value: -1,    rule_value: 'is_active,false'    },
  { value: 2,     rule_value: 'eye_color,blue'     },
  { value: false, rule_value: 'latitude,32'        },
]

permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_accepted_if(${value}, ${rule_value}) to equal true`, () => {
    expect(validator_accepted_if(value, rule_value, values)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: 'a',   rule_value: 'age,25'             },
  { value: -1,    rule_value: 'is_active,true'     },
  { value: 2,     rule_value: 'eye_color,green'    },
  { value: false, rule_value: 'latitude,32.263258' },
]

non_permitted_values.forEach(({ value, rule_value }) => {
  test(`validator_accepted_if(${value}, ${rule_value}) to equal false`, () => {
    expect(validator_accepted_if(value, rule_value, values)).toEqual(false);
  })
})

//#endregion
