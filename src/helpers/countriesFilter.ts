import { ICountryShort } from '../types/countries'


export const countriesFilter = (
  countries: ICountryShort[],
  query: string | null,
  region: string | null
): ICountryShort[] => {
  let queryArr = []
  if (query) {
    queryArr = countries.filter(el => el.name.common.toLowerCase().includes(query.toLowerCase()))
  } else {
    queryArr = countries
  }

  if (region) {
    return queryArr.filter(el => el.region.toLowerCase().includes(region.toLowerCase()))
  } else {
    return queryArr
  }

}