// Returns an array of length=amount filled with objects with random values from 0 to amount - 1
export const generateVisualizationValues = (amount: number) => {
  return Array.from({ length: amount }, () => ({
    value: Math.floor(Math.random() * amount) + 1,
  }))
}
