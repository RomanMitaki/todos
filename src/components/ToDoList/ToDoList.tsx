import React from 'react'
import classes from './ToDoList.module.css'
import { classNames } from '../../assets/classNames/classNames'
import NavBar from '../NavBar/NavBar'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../Todo/ToDo'

const ToDoList = () => {
  return (
        <div className={classNames(classes.page, {}, [])}>
            <h1>todos</h1>
            <ToDoForm/>
            <div>
                <ToDo/>
            </div>
            <NavBar/>
        </div>
  )
}

export default ToDoList
