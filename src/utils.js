export function handleSplit(str) {
  const truncateString = str.split(' ')

    if (truncateString[0].length > 5) {
      let NewString = truncateString[0]

      if(NewString.includes(":")){
        return NewString.split(":")[0]
     }else if(NewString.includes('-'))
         return NewString.split("-")[0]
      else{
        return NewString
      }
    } else {
      return`${truncateString[0]} ${truncateString[1]}`
    }
}
