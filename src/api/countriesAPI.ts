import axios from 'axios'
import { ICountryFull, ICountryName, ICountryShort } from '../types/countries'


export const getCountyInfo = async (code: string) => {
  const response = await axios.get<ICountryFull>(`https://restcountries.com/v3.1/alpha/${code}?status=true&fields=flags,name,ccn3,capital,region,population,tld,currencies,subregion,languages,borders`)
  return response.data
}

export const getAllCountriesShortInfo = async () => {
  const response = await axios.get<ICountryShort[]>('https://restcountries.com/v3.1/independent?status=true&fields=name,population,flags,region,capital,ccn3')
  return response.data
}

export const getCountyNameByCode = async (code: string) => {
  const response = await axios.get<ICountryName>(`https://restcountries.com/v3.1/alpha/${code}?status=true&fields=name`)
  return response.data.name.common
}