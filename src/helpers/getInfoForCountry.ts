export const getNativeName = (nativeNameObj: {
  [x: string]: {
    common: string
  }
}): string => {
  const key = Object.keys(nativeNameObj)[0]
  return nativeNameObj[key].common
}

export const getCurrencies = (currencies: { [x: string]: { name: string } }): string => {
  const keys = Object.keys(currencies)
  return keys.map((el) => {
    return currencies[el].name
  }).join(', ')
}

export const getLanguages = (languages: { [x: string]: string }): string => {
  const keys = Object.keys(languages)
  return keys.map((el) => {
    return languages[el]
  }).join(', ')
}