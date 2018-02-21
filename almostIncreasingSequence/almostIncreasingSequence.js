function almostIncreasingSequence(sequence) {
  let found = 0;
  for(i = 0; i < sequence.length; i++){
    if(sequence[i] <= sequence[i-1]){
      found++;
      if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
        return false;
      }      
    }
  }
  return found <= 1;
}