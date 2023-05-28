import { FC } from 'react'
import { formatNumbers } from '../../helpers/formatNumbers'
import styles from './CountryCard.module.css'
import { useNavigate } from 'react-router-dom'

interface Props {
  image: string,
  name: string,
  population: number,
  region: string,
  capital: string,
  code:string
}

const CountryCard: FC<Props> = ({ capital, image, name, population, region, code }) => {
  const navigate = useNavigate()

  return (
    <div className={styles.countryCard} onClick={()=>navigate(`/country/${code}`)}>
      <img src={image} />
      <div>
        <h2>{name}</h2>
        <p>Population: <span>{formatNumbers(population)}</span></p>
        <p>Region: <span>{region}</span></p>
        <p>Capital: <span>{capital}</span></p>
      </div>
    </div>
  )
}

export default CountryCard