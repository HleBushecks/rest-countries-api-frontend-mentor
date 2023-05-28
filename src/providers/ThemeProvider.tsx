import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { themes } from '../constants/themes'
import { themeContext } from '../context/theme.context'

const getTheme = () => {
  const theme = window.localStorage.getItem('theme')
  if (theme === themes.dark) {
    return themes.dark
  }

  return themes.light
}

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>(getTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider