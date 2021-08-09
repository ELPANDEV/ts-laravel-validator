import validator_email from "../../validators/email";

//#region true

const permitted_values = [
  'wisozk.wilber@simonis.com',
  'garrison.fisher@bartell.org',
  'nweissnat@dietrich.com',
  'buck09@wehner.com',
  'ambrose13@hotmail.com',
  'tianna49@gmail.com',
  'lturcotte@yahoo.com',
  'alvera.schulist@yahoo.com',
  'dorian39@hagenes.com',
  'madyson.ondricka@yahoo.com',
]

permitted_values.forEach(value => {
  test(`validator_email(${value}) to equal true`, () => {
    expect(validator_email(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  'ambrose13@hotmailcom',
  'gmail@com',
  'lturcotte@org',
  '@yahoo.com',
  'dorian39hagenes.com',
  'madyson.ondricka@yahoo.',
]

non_permitted_values.forEach(value => {
  test(`validator_email(${value}) to equal false`, () => {
    expect(validator_email(value)).toEqual(false);
  })
})

//#endregion
