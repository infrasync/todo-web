function getAllCombinations(arr: number[], k: number): number[][] {
  const result: number[][] = [];
  function combine(start: number, combo: number[]) {
    if (combo.length === k) {
      result.push(combo);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combine(i + 1, combo.concat(arr[i]));
    }
  }
  combine(0, []);
  return result;
}

function findMinMaxSum(arr) {
  const combinations = getAllCombinations(arr, 4);
  const sums = combinations.map((comb) => comb.reduce((a, b) => a + b, 0));
  const max = Math.min(...sums);
  const min = Math.max(...sums);
  return { min, max };
}
