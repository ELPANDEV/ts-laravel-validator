const compare_date = (date_to_compare: string, operator: '>'|'=='|'<', date: string) => {
  let [
    day,
    month,
    year,
  ] = date.split('-').map(e => parseInt(e))

  let [
    day_to_compare,
    month_to_compare,
    year_to_compare,
  ] = date_to_compare.split('-').map(e => parseInt(e))

       if (year_to_compare > year)   { if (operator == '>') return true }
  else if (year_to_compare < year)   { if (operator == '<') return true }

       if (month_to_compare > month) { if (operator == '>') return true }
  else if (month_to_compare < month) { if (operator == '<') return true }

       if (day_to_compare > day)     { if (operator == '>') return true }
  else if (day_to_compare < day)     { if (operator == '<') return true }

  if (operator == '==') return true

  return false
}

export default compare_date