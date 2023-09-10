import React from 'react'
import { Theme } from '../../assets/theme/ThemeContext'
import { PiMoonThin, PiSunDimLight } from 'react-icons/pi'
import { Button } from '../Button/Button'
import { useTheme } from '../../assets/theme/useTheme'

const NavBar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
        <div>
            <Button onClick={toggleTheme}>
                {theme === Theme.DARK ? <PiMoonThin color={'white'} size={'20px'}/> : <PiSunDimLight color={'white'} size={'20px'}/>}
            </Button>
        </div>
  )
}

export default NavBar
