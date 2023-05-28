import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { regions } from '../../constants/regions'
import { useDebounce } from '../../hooks/useDebounce'
import Select from '../../ui/Select'
import styles from './FilterInput.module.css'

const FilterInput: FC = () => {
  const [region, setRegion] = useState<string>('')
  const [country, setCountry] = useState<string>('')
  const [, setSearchParams] = useSearchParams()

  const debouncedCallback = useDebounce((country, region) => {
    setSearchParams([[
      'q', `${country}`.trim()
    ], [
      'r', `${region}`
    ]])
  }, 500)

  useEffect(() => {
    debouncedCallback(country, region)
  }, [region, country])

  return (
    <div className={styles.filterInput}>
      <input
        type="text"
        placeholder='Search for a country...'
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <Select
        title='Filter by Region'
        list={regions}
        setActiveHandler={setRegion} />
    </div>
  )
}

export default FilterInput