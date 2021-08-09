import TMime from "../types/mime";
import TMimeExtension from "../types/mime-extension";

type Rule =
  `accepted_if:${string}`|
  `accepted`|
  `after_or_equal:${`##-##-####`|`${number}-${number}-${number}`}`|
  `after:${`##-##-####`|`${number}-${number}-${number}`}`|
  `alpha_dash`|
  `alpha_num`|
  `alpha`|
  `array`|
  `before_or_equal:${`##-##-####`|`${number}-${number}-${number}`}`|
  `before:${`##-##-####`|`${number}-${number}-${number}`}`|
  `boolean`|
  `confirmed`|
  `date_equals:${`##-##-####`|`${number}-${number}-${number}`}`|
  `date_format:${`dd-mm-yyyy`|string}`|
  `different:${string}`|
  `email`|
  `ends_with:${string}`|
  `file`|
  `image`|
  `integer`|
  `json`|
  `length:${`#`|number}`|
  `max:${`#`|number}`|
  `mime_types:${TMime}`|
  `mimes:${TMimeExtension}`|
  `min:${`#`|number}`|
  `number`|
  `present`|
  `regex:${string}`|
  `required_without:${string}`|
  `required`|
  `same:${string}`|
  `size:${`#`|number}`|
  `starts_with:${string}`|
  `string`|
  `url`

export default Rule