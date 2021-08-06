const date_to_format = (date: Date, format: string = 'yyyy-mm-dd') => {
  const dd   = String(date.getDate()).padStart(2, '0')
  const mm   = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear().toString()

  return format
    .replace('yyyy', yyyy)
    .replace('mm', mm)
    .replace('dd', dd)
}

export default date_to_format