function makeArrayConsecutive2(statues) {
  min = Math.min.apply(null, statues);
  max = Math.max.apply(null, statues);
  let numbers_between = [];
  for (i = min+1; i <= max-1; i++) {
    if (statues.includes(i) == false) {
      numbers_between.push(i);
    }
  }
  return numbers_between.length;
}