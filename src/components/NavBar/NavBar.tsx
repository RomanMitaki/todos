import React, { type Dispatch, type SetStateAction } from 'react'
import { Theme } from '../../assets/theme/ThemeContext'
import { PiMoonThin, PiSunDimLight } from 'react-icons/pi'
import { Button } from '../Button/Button'
import { useTheme } from '../../assets/theme/useTheme'
import { type IToDos } from '../../types/types'
import { classNames } from '../../assets/classNames/classNames'
import classes from './NavBar.module.css'

interface NavBarProps {
  className?: string
  isActive: Dispatch<SetStateAction<boolean>>
  isCompleted: Dispatch<SetStateAction<boolean>>
  todos: IToDos
  setTodos: Dispatch<SetStateAction<IToDos>>
  renderedQtyTodos: number
  clearCompletedTodos: () => void
}

const NavBar = (props: NavBarProps) => {
  const { clearCompletedTodos, renderedQtyTodos, isActive, isCompleted } = props
  const { theme, toggleTheme } = useTheme()

  const handleActive = () => {
    isCompleted(false)
    isActive(true)
  }

  const handleCompleted = () => {
    isActive(false)
    isCompleted(true)
  }

  const handleAll = () => {
    isCompleted(false)
    isActive(false)
  }

  return (
        <div className={classNames(classes.NavBar__wrapper)}>
            <p>{renderedQtyTodos !== 1 ? `${renderedQtyTodos} items left` : `${renderedQtyTodos} item left`}</p>
            <div className={classNames(classes.btn__wrapper)}>
                <Button onClick={handleAll}>All</Button>
                <Button onClick={handleActive}>Active</Button>
                <Button onClick={handleCompleted}>Completed</Button>
            </div>
            <Button onClick={toggleTheme}>
                {theme === Theme.DARK ? <PiMoonThin color={'white'} size={'20px'}/> : <PiSunDimLight color={'black'} size={'20px'}/>}
            </Button>
            <Button onClick={() => { clearCompletedTodos() } }>Clear completed</Button>
        </div>
  )
}

export default NavBar
