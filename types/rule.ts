import TMime from "../types/mime";
import TMimeExtension from "../types/mime-extension";

type Rule =
  `accepted_if:${string}`|
  `accepted`|
  `active_url`|
  `after_or_equal:${`##-##-####`|`${number}-${number}-${number}`}`|
  `after:${`##-##-####`|`${number}-${number}-${number}`}`|
  `alpha_dash`|
  `alpha_num`|
  `alpha_num`|
  `array`|
  `bail`|
  `before_or_equal:${`##-##-####`|`${number}-${number}-${number}`}`|
  `before:${`##-##-####`|`${number}-${number}-${number}`}`|
  `boolean`|
  `confirmed`|
  `current_password`|
  `date_equals:${`##-##-####`|`${number}-${number}-${number}`}`|
  `date_format:${`dd-mm-yyyy`|string}`|
  `date`|
  `different:${string}`|
  `digits_between`|
  `digits`|
  `dimensions`|
  `distinct`|
  `email`|
  `ends_with:${string}`|
  `exclude_if`|
  `exclude_unless`|
  `exists`|
  `file`|
  `filled`|
  `gt`|
  `gte`|
  `image`|
  `in_array`|
  `in`|
  `integer`|
  `ip`|
  `ipv4`|
  `ipv6`|
  `json`|
  `length:${`#`|number}`|
  `lt`|
  `lte`|
  `max:${`#`|number}`|
  `mime_types:${TMime}`|
  `mimes:${TMimeExtension}`|
  `min:${`#`|number}`|
  `number`|
  `present`|
  `prohibited_if`|
  `prohibited_unless`|
  `prohibited`|
  `regex:${string}`|
  `required_if`|
  `required_unless`|
  `required_with_all`|
  `required_with`|
  `required_without_all`|
  `required_without:${string}`|
  `required`|
  `same:${string}`|
  `size:${`#`|number}`|
  `sometimes`|
  `starts_with:${string}`|
  `string`|
  `timezone`|
  `unique`|
  `url`|
  `uuid`

export default Rule