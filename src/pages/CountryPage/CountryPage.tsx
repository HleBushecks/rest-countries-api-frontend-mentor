import { FC, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getCountyInfo, getCountyNameByCode } from '../../api/countriesAPI'
import blackArrow from '../../assets/blackBackArrow.svg'
import whiteArrow from '../../assets/whiteBackArrow.svg'
import { themes } from '../../constants/themes'
import { themeContext } from '../../context/theme.context'
import { formatNumbers } from '../../helpers/formatNumbers'
import { getCurrencies, getLanguages, getNativeName } from '../../helpers/getInfoForCountry'
import { ICountryFull } from '../../types/countries'
import styles from './CountryPage.module.css'


const CountryPage: FC = () => {
  const { code } = useParams()
  const [countryInfo, setCountryInfo] = useState<ICountryFull>({} as ICountryFull)
  const [borderWithFullBorder, setBorderWithFullBorder] = useState<[string, string][]>([])
  const navigate = useNavigate()
  const { theme } = useContext(themeContext)

  const { borders, capital, currencies, flags, languages, name, population, region, subregion, tld } = countryInfo


  useEffect(() => {
    setBorderWithFullBorder([])
    if (!code) return
    getCountyInfo(code)
      .then(data => setCountryInfo(data))
  }, [code])

  useEffect(() => {
    if (!borders?.length) return
    borders.forEach(el => {
      getCountyNameByCode(el)
        .then(name => {
          setBorderWithFullBorder(prev => [...prev, [el, name]])
        })
    })
  }, [borders])

  if (!Object.keys(countryInfo).length) return <></>

  return (
    <div className={styles.countryPage}>
      <div className={styles.backBtn}>
        <button onClick={() => navigate(-1)}>
          {
            theme === themes.dark
              ? <img src={whiteArrow} />
              : <img src={blackArrow} />
          }
          Back</button>
      </div>
      <section className={styles.sectionInfo}>
        <img src={flags.png} alt="" />
        <div className={styles.info}>
          <h2>{name.common}</h2>
          <div className={styles.infoValue}>
            <div>
              <p>Native Name: {getNativeName(name.nativeName)}</p>
              <p>Population: {formatNumbers(population)}</p>
              <p>Region: {region}</p>
              <p>Sub Region: {subregion}</p>
              <p>Capital: {capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {tld.map(el => <span key={el}>{el}</span>)}</p>
              <p>Currencies: {getCurrencies(currencies)}</p>
              <p>Languages: {getLanguages(languages)}</p>
            </div>
          </div>
          <div className={styles.borders}>
            <span>Border countries:</span>
            {borderWithFullBorder.length
              ? borderWithFullBorder.map(el =>
                <button key={el[0]} onClick={() => navigate(`/country/${el[0]}`)}>{el[1]}</button>
              )
              : 'None'}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CountryPage