function getRatios(arr: number[]) {
  const positive: string = (
    arr.filter((v) => v > 0).length / arr.length
  ).toPrecision(6);
  const negative: string = (
    arr.filter((v) => v < 0).length / arr.length
  ).toPrecision(6);
  const zero: string = (
    arr.filter((v) => v === 0).length / arr.length
  ).toPrecision(6);

  console.log({
    positive,
    negative,
    zero,
  });
}
