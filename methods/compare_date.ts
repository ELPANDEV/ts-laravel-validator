const compare_date = (date: string, operator: '>'|'>='|'=='|'<='|'<', date2: string) => {
  let [
    day,
    month,
    year,
  ] = date.split('-').map(e => parseInt(e))

  let [
    day2,
    month2,
    year2,
  ] = date2.split('-').map(e => parseInt(e))

  const is_after  = (): boolean => {
         if (year >  year2) return true
    else if (year == year2) {
           if (month >  month2) return true
      else if (month == month2) {
        if (day > day2) return true
      }
    }

    return false
  }
  
  const is_before = (): boolean => {
         if (year <  year2) return true
    else if (year == year2) {
           if (month <  month2) return true
      else if (month == month2) {
        if (day2 < day) return true
      }
    }

    return false
  }
  
  const is_equal  = (): boolean => {
    return (
      year2  == year  &&
      month2 == month &&
      day2   == day
    )
  }

  switch (operator) {
    case '>':  return is_after()
    case '>=': return is_equal() && is_after()
    case '==': return is_equal()
    case '<=': return is_equal() && is_before()
    case '<':  return is_before()
  
    default: return false
  }
}

export default compare_date