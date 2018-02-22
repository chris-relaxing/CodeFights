function allLongestStrings(inputArray) {
  let longest = 0;
  let longest_strings = []
  for(s = 0; s < inputArray.length; s++) {
    if(inputArray[s].length > longest) {
      longest = inputArray[s].length;
    } 
  }
  for(s = 0; s < inputArray.length; s++) {
    if(inputArray[s].length == longest) {
      longest_strings.push(inputArray[s]);
    } 
  }
  return longest_strings;
}