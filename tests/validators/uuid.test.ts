import validator_uuid from "../../validators/uuid";

type values = {
  value:      any,
  rule_value: string
}

//#region true

const permitted_values: values[] = [
  { value: '698491c0-f983-11eb-9a03-0242ac130003', rule_value: '' },
  { value: '70498eac-f983-11eb-9a03-0242ac130003', rule_value: '' },
  { value: '35368494-a407-4e94-92b9-74a07d608d0b', rule_value: '' },
  { value: '38c2fad9-c3e1-4a77-8764-3e7731e751a1', rule_value: '' },
  { value: '8b3a1722-825b-491f-a152-790ccfc5935d', rule_value: '' },
  { value: 'ba7668cb-c010-4dec-947f-c47b333a2754', rule_value: '' },
  { value: '2882d533-3bfd-4c25-a090-bdc5252431a4', rule_value: '' },
  { value: '6b427907-e580-4916-8ad0-32b513f8b340', rule_value: '' },
  { value: 'd43afe1d-4828-473c-8577-ca3d123271fd', rule_value: '' },
  { value: '40fb7677-6f10-4ece-a1fa-362b6b06a783', rule_value: '' },
  { value: '13aa2a6c-b88c-4025-b151-3bff5677d61a', rule_value: '' },
  { value: 'e82082e5-225c-467e-adc4-c12173b5015b', rule_value: '' },
  { value: '8621aada-8096-4a8b-87df-1f47c9d8f069', rule_value: '' },
]


permitted_values.forEach(({ value }) => {
  test(`validator_uuid(${value}) to equal true`, () => {
    expect(validator_uuid(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values: values[] = [
  { value: '698X91c0-f983-11eb-9a03-0242ac130003', rule_value: '' },
  { value: '70498eac-fX83-11eb-9a03-0242ac130003', rule_value: '' },
  { value: '35368494-a407-4eX4-92b9-74a07d608d0b', rule_value: '' },
  { value: '8b3a1722-825b-491f-aX52-790ccfc5935d', rule_value: '' },
  { value: '38c2fad9-c3e1-4a77-8764-3e7X31e751a1', rule_value: '' },
]

non_permitted_values.forEach(({ value }) => {
  test(`validator_uuid(${value}) to equal false`, () => {
    expect(validator_uuid(value)).toEqual(false);
  })
})

//#endregion
