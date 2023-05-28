import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import darkMoon from '../../assets/darkMoon.svg'
import lightMoon from '../../assets/lightMoon.svg'
import { themes } from '../../constants/themes'
import { themeContext } from '../../context/theme.context'
import styles from './Header.module.css'

const Header: FC = () => {
  const { theme, setTheme } = useContext(themeContext)
  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <h1 onClick={() => navigate('/')}>Where in the world?</h1>
      {theme === themes.dark
        ? <button onClick={() => setTheme('light')}>
          <img src={darkMoon} alt="" />
          <h3>Dark Mode</h3>
        </button>
        : <button onClick={() => setTheme('dark')}>
          <img src={lightMoon} alt="" />
          <h3>Light Mode</h3>
        </button>
      }


    </div>
  )
}

export default Header