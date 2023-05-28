import { FC } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import CountryPage from '../../pages/CountryPage'
import StartPage from '../../pages/StartPage'
import Header from '../Header'
import styles from './App.module.css'

const App: FC = () => {
  return (
    <HashRouter>
      <div className={styles.app}>
        <Header />
        <div className={styles.container}>

          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/country/:code' element={<CountryPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>

        </div>
      </div>
    </HashRouter>
  )
}

export default App