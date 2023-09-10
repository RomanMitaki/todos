import React from 'react'
import '../styles/index.css'
import { useTheme } from '../assets/theme/useTheme'
import { classNames } from '../assets/classNames/classNames'
import ToDoList from './ToDoList/ToDoList'

const App = () => {
  const { theme } = useTheme()
  return (
        <div className={classNames('app', {}, [theme])}>
            <ToDoList/>
        </div>
  )
}

export default App
