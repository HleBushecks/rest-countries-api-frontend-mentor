import { createContext, Dispatch, SetStateAction } from 'react'

interface IThemeContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const themeContext = createContext<IThemeContext>({} as IThemeContext)