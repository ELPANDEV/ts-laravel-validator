import IErrors from "./types/errors";
import IMessages from "./types/messages";
import RuleKey from "./types/rule_key";
import IRules from "./types/rules";
import IValues from "./types/values";

import validator_accepted_if from "./validators/accepted_if";
import validator_accepted from "./validators/accepted";
import validator_after from "./validators/after";
import validator_before from "./validators/before";
import validator_email from "./validators/email";
import validator_length from "./validators/length";
import validator_max from "./validators/max";
import validator_min from "./validators/min";
import validator_number from "./validators/number"
import validator_required from "./validators/required";
import validator_required_without from "./validators/required_without";
import validator_string from "./validators/string"
import validator_after_or_equal from "./validators/after_or_equal";
import validator_alpha_dash from "./validators/alpha_dash";
import validator_alpha_num from "./validators/alpha_num";
import validator_array from "./validators/array";
import validator_before_or_equal from "./validators/before_or_equal";
import validator_boolean from "./validators/boolean";
import validator_confirmed from "./validators/confirmed";
import validator_date_equals from "./validators/date_equals";
import validator_date_format from "./validators/date_format";
import validator_different from "./validators/different";
import validator_ends_with from "./validators/ends_with";
import validator_file from "./validators/file";
import validator_image from "./validators/image";
import validator_integer from "./validators/integer";
import validator_json from "./validators/json";
import validator_mime_types from "./validators/mime_types";
import validator_mimes from "./validators/mimes";
import validator_present from "./validators/present";
import validator_regex from "./validators/regex";
import validator_same from "./validators/same";
import validator_size from "./validators/size";
import validator_starts_with from "./validators/starts_with";
import validator_url from "./validators/url";
import validator_active_url from "./validators/active_url";
import validator_bail from "./validators/bail";
import validator_current_password from "./validators/current_password";
import validator_date from "./validators/date";
import validator_digits_between from "./validators/digits_between";
import validator_digits from "./validators/digits";
import validator_dimensions from "./validators/dimensions";
import validator_distinct from "./validators/distinct";
import validator_exclude_if from "./validators/exclude_if";
import validator_exclude_unless from "./validators/exclude_unless";
import validator_exists from "./validators/exists";
import validator_filled from "./validators/filled";
import validator_gt from "./validators/gt";
import validator_gte from "./validators/gte";
import validator_in_array from "./validators/in_array";
import validator_in from "./validators/in";
import validator_ip from "./validators/ip";
import validator_ipv4 from "./validators/ipv4";
import validator_ipv6 from "./validators/ipv6";
import validator_lt from "./validators/lt";
import validator_lte from "./validators/lte";
import validator_prohibited_if from "./validators/prohibited_if";
import validator_prohibited_unless from "./validators/prohibited_unless";
import validator_prohibited from "./validators/prohibited";
import validator_required_if from "./validators/required_if";
import validator_required_unless from "./validators/required_unless";
import validator_required_with_all from "./validators/required_with_all";
import validator_required_with from "./validators/required_with";
import validator_required_without_all from "./validators/required_without_all";
import validator_sometimes from "./validators/sometimes";
import validator_timezone from "./validators/timezone";
import validator_unique from "./validators/unique";
import validator_uuid from "./validators/uuid";
import validator_alpha from "./validators/alpha";

const validate = (values: IValues, rules: IRules, messages?: IMessages): IErrors => {
  const errors: IErrors = {}

  for (const key in rules) {
    const value = values[key]

    rules[key].forEach(rule => {
      const [rule_key, rule_value] = rule.split(':') as [RuleKey, string]

      if (!validate_rule(key, rule_key, rule_value, value, values)) {
        const custom_message      = messages ? messages[key] : null
        const custom_message_rule = custom_message ? custom_message[rule_key] : undefined

        const message = custom_message_rule
          ? custom_message_rule
          : 'el campo :attr no cumple con la regla :rule'

        if (errors[key] == undefined) {
          errors[key] = []
        }

        errors[key].push(
          message
            .replace(/:attr/g,  key)
            .replace(/:value/g, rule_value)
            .replace(/:rule/g,  rule_key)
        )
      }
    })
  }

  return errors
}

const validate_rule = (key: string, rule_key: RuleKey, rule_value: string, value: any, values: IValues): boolean => {
  switch (rule_key) {
    case `accepted_if`:          return validator_accepted_if(value, rule_value, values)
    case `accepted`:             return validator_accepted(value)
    case `active_url`:           return validator_active_url(value) //
    case `after_or_equal`:       return validator_after_or_equal(value, rule_value)
    case `after`:                return validator_after(value, rule_value)
    case `alpha_dash`:           return validator_alpha_dash(value)
    case `alpha_num`:            return validator_alpha_num(value)
    case `alpha`:                return validator_alpha(value)
    case `array`:                return validator_array(value)
    case `bail`:                 return validator_bail(value) //
    case `before_or_equal`:      return validator_before_or_equal(value, rule_value)
    case `before`:               return validator_before(value, rule_value)
    case `boolean`:              return validator_boolean(value)
    case `confirmed`:            return validator_confirmed(key, values)
    case `current_password`:     return validator_current_password(key) //
    case `date_equals`:          return validator_date_equals(value, rule_value)
    case `date_format`:          return validator_date_format(value, rule_value)
    case `date`:                 return validator_date(value) // 
    case `different`:            return validator_different(value, rule_value, values)
    case `digits_between`:       return validator_digits_between(value, rule_value) //
    case `digits`:               return validator_digits(value, rule_value) //
    case `dimensions`:           return validator_dimensions(value) //
    case `distinct`:             return validator_distinct(value) //
    case `email`:                return validator_email(value)
    case `ends_with`:            return validator_ends_with(value, rule_value)
    case `exclude_if`:           return validator_exclude_if(value) //
    case `exclude_unless`:       return validator_exclude_unless(value) //
    case `exists`:               return validator_exists(value) //
    case `file`:                 return validator_file(value)
    case `filled`:               return validator_filled(value) //
    case `gt`:                   return validator_gt(value, rule_value, values) //
    case `gte`:                  return validator_gte(value, rule_value, values) //
    case `image`:                return validator_image(value)
    case `in_array`:             return validator_in_array(value, rule_value, values) //
    case `in`:                   return validator_in(value, rule_value) //
    case `integer`:              return validator_integer(value)
    case `ip`:                   return validator_ip(value) //
    case `ipv4`:                 return validator_ipv4(value) //
    case `ipv6`:                 return validator_ipv6(value) //
    case `json`:                 return validator_json(value)
    case `length`:               return validator_length(value, rule_value)
    case `lt`:                   return validator_lt(value, rule_value, values) //
    case `lte`:                  return validator_lte(value, rule_value, values) //
    case `max`:                  return validator_max(value, rule_value)
    case `mime_types`:           return validator_mime_types(value, rule_value)
    case `mimes`:                return validator_mimes(value, rule_value)
    case `min`:                  return validator_min(value, rule_value)
    case `number`:               return validator_number(value)
    case `present`:              return validator_present(key, values)
    case `prohibited_if`:        return validator_prohibited_if(value, rule_value, values) //
    case `prohibited_unless`:    return validator_prohibited_unless(value, rule_value, values) //
    case `prohibited`:           return validator_prohibited(value) //
    case `regex`:                return validator_regex(value, rule_value)
    case `required_if`:          return validator_required_if(value) //
    case `required_unless`:      return validator_required_unless(value) //
    case `required_with_all`:    return validator_required_with_all(value) //
    case `required_with`:        return validator_required_with(value) //
    case `required_without_all`: return validator_required_without_all(value) //
    case `required_without`:     return validator_required_without(value, rule_value, values)
    case `required`:             return validator_required(value)
    case `same`:                 return validator_same(value, rule_value, values)
    case `size`:                 return validator_size(value, rule_value)
    case `sometimes`:            return validator_sometimes(value) //
    case `starts_with`:          return validator_starts_with(value, rule_value)
    case `string`:               return validator_string(value)
    case `timezone`:             return validator_timezone(value) //
    case `unique`:               return validator_unique(value) //
    case `url`:                  return validator_url(value)
    case `uuid`:                 return validator_uuid(value) //

    default: return true
  }
}

export {
  IMessages,
  IRules,
  IValues,
}

export default validate