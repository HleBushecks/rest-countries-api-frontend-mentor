import { FC, useEffect, useRef, useState } from 'react'
import { getAllCountriesShortInfo } from '../../api/countriesAPI'
import FilterInput from '../../components/FilterInput'
import { useScroll } from '../../hooks/useScroll'
import { ICountryShort } from '../../types/countries'
import CountryCard from '../../ui/CountryCard'
import styles from './StartPage.module.css'
import { useSearchParams } from 'react-router-dom'
import { countriesFilter } from '../../helpers/countriesFilter'

const StartPage: FC = () => {
  const [countries, setCountries] = useState<ICountryShort[]>([])
  const [filteredCountries, setFilteredCountries] = useState<ICountryShort[]>([])
  const [countriesForShow, setCountriesForShow] = useState<ICountryShort[]>([])
  const [countShow, setCountShow] = useState<number>(20)
  
  const refObserver = useRef<HTMLDivElement>(null)
  
  const query = useSearchParams()[0].get('q')
  const region = useSearchParams()[0].get('r')

  useScroll(refObserver, () => {
    setCountShow(prev => prev + 20)
  })

  useEffect(() => {
    if (countries.length) return
    getAllCountriesShortInfo()
      .then(data => setCountries(data))
  }, [])

  useEffect(()=>{
    const filteredArr = countriesFilter(countries, query, region)
    setFilteredCountries(filteredArr)
    setCountShow(20)
  }, [countries, query, region])

  useEffect(() => {
    setCountriesForShow(filteredCountries.slice(0, countShow))
  }, [countShow, filteredCountries])

  return (
    <div className={styles.startPage}>
      <FilterInput />
      <section className={styles.countries}>
        {countriesForShow.map(el =>
          <CountryCard
            capital={el.capital[0]}
            image={el.flags.png}
            name={el.name.common}
            population={el.population}
            region={el.region}
            code={el.ccn3}
            key={el.name.common}
          />
        )}
      </section>
      <div className={styles.observer} ref={refObserver}></div>
    </div>
  )
}

export default StartPage