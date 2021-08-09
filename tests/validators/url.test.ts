import validator_url from "../../validators/url";

//#region true

const permitted_values = [
  'http://syxzrr.ctynforlsy.com.au',
  'http://ophapkhxfis.bqhahyqks.gov',
  'https://laravel.com/docs/8.x/validation#validating-when-present',
  'http://tools.eti.pw/fakeurls.php',
  'https://stackoverflow.com/questions/62181682/env-variables-within-cloud-run-server-are-no-accessible',
  'https://www.youtube.com/watch?v=VWNFj9rm6tc&list=RDVWNFj9rm6tc&start_radio=1'
]

permitted_values.forEach(value => {
  test(`validator_url(${value}) to equal true`, () => {
    expect(validator_url(value)).toEqual(true);
  })
})

//#endregion
//#region false

const non_permitted_values = [
  'htt://syxzrr.ctynforlsy.com.au',
  'http://ophapkhxfis.bqhahyqks .gov',
  'https://laravel.com/docs/8.x/validation#validating-when-present 1',
  'http//tools.eti.pw/fakeurls.php',
  'https:/stackoverflow.com/questions/62181682/env-variables-within-cloud-run-server-are-no-accessible',
  'site://www.youtube.com/watch?v=VWNFj9rm6tc&list=RDVWNFj9rm6tc&start_radio=1'
]

non_permitted_values.forEach(value => {
  test(`validator_url(${value}) to equal false`, () => {
    expect(validator_url(value)).toEqual(false);
  })
})

//#endregion
