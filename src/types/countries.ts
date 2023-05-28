export interface ICountryShort {
  flags: {
    png: string,
    svg: string
  },
  name: {
    common: string,
  },
  ccn3: string,
  capital: [string],
  region: string,
  population: number,

}

export interface ICountryFull extends ICountryShort {
  tld: string[],
  name: {
    common: string,
    nativeName: {
      [x: string]: {
        common: string
      }
    }
  },
  currencies: {
    [x: string]: {
      name: string,
    }
  },
  subregion: string,
  languages: {
    [x: string]: string
  },
  borders: string[]
}

export interface ICountryName {
  name: {
    common: string
  }
}