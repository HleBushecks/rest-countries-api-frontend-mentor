export const formatNumbers = (number: number): string => {
  const arr = String(number).split('').reverse()
  const newArr: string[] = []
  arr.forEach((el, index) => {
    newArr.unshift(el)
    if ((index + 1) % 3 === 0) newArr.unshift(',')
  })
  if (newArr[0] === ',') newArr.shift()
  return newArr.join('')
}