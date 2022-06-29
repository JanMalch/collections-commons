/**
 * @category Factory
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize < 1) {
    throw new Error(`Chunk size must be greater than 0 but is ${chunkSize}.`);
  }
  return array.reduce<T[][]>((acc, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (acc[chunkIndex] == null) {
      acc[chunkIndex] = [item];
    } else {
      acc[chunkIndex].push(item);
    }
    return acc;
  }, []);
}
