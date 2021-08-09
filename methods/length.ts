const length = (value: any): number => {
  switch (typeof value) {
    case 'string': return value.length
    case 'number': return value
  
    default: break
  }

       if (Array.isArray(value))  return value.length
  else if (value instanceof File) return value.size

  return -1
}

export default length