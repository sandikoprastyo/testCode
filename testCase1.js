function calculate_diagonal_sum(grid_size) {
  let sum = 1;
  let current = 1;
  let increment = 2;

  for (let i = 0; i < (grid_size - 1) / 2; i++) {
    for (let j = 0; j < 4; j++) {
      current += increment;
      sum += current;
    }
    increment += 2;
  }
  return sum;
}

export default calculate_diagonal_sum;
