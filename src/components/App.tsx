import React from 'react'
import '../styles/index.css'
import { useTheme } from '../assets/theme/useTheme'
import { classNames } from '../assets/classNames/classNames'
import { Button } from './Button/Button'
import { PiMoonThin, PiSunDimLight } from 'react-icons/pi'
import { Theme } from '../assets/theme/ThemeContext'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
            <Button onClick={toggleTheme}>
                {theme === Theme.DARK ? <PiMoonThin color={'white'} size={'20px'}/> : <PiSunDimLight color={'white'} size={'20px'}/>}
            </Button>
        </div>
  )
}

export default App
