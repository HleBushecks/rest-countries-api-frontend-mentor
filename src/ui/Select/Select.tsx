import { Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import blackArrow from '../../assets/blackArrow.svg'
import whiteArrow from '../../assets/whiteArrow.svg'
import { themes } from '../../constants/themes'
import { themeContext } from '../../context/theme.context'
import styles from './Select.module.css'


interface Props {
  title: string,
  list: string[],
  setActiveHandler: Dispatch<SetStateAction<string>>
}

const Select: FC<Props> = ({ list, title, setActiveHandler }) => {
  const [active, setActive] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)
  const { theme } = useContext(themeContext)

  const toggleShow = () => {
    setIsShow(prev => !prev)
  }

  const elementClick = (el: string) => {
    if (el === active) {
      setActive('')
      setActiveHandler('')
    } else {
      setActive(el)
      setActiveHandler(el)
    }
    setIsShow(false)
  }

  return (
    <div className={styles.select}>
      <div className={styles.title} onClick={toggleShow}>
        <h2>{!active ? title : active}</h2>
        {theme === themes.dark
          ? <img src={whiteArrow} />
          : <img src={blackArrow} />
        }
      </div>
      <div className={`${styles.list} ${isShow ? styles.activeList : ''}`}>
        {list.map(el =>
          <button key={el} onClick={() => elementClick(el)}>{el}</button>
        )}
      </div>
    </div>
  )
}

export default Select