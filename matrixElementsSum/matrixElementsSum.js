function matrixElementsSum(matrix) {
  let suitable_rooms = 0;
  for(i = 0; i < matrix[0].length; i++) { 
    for(a = 0; a < matrix.length; a++) {
      if (matrix[a][i] === 0) { break; }
      else { suitable_rooms += matrix[a][i]; }
    }
  }
  return suitable_rooms;
}