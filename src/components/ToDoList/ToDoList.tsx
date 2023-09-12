import React, { useState } from 'react'
import classes from './ToDoList.module.css'
import { classNames } from '../../assets/classNames/classNames'
import NavBar from '../NavBar/NavBar'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../Todo/ToDo'
import { type IToDo, type IToDos } from '../../types/types'

const ToDoList = () => {
  const [todos, setTodos] = useState<IToDos>([])

  const addTodo = (todo: IToDo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(...todos)
  }
  console.log(todos)
  return (
        <div className={classNames(classes.page, {}, [])}>
            <h1>todos</h1>
            <ToDoForm onSubmit={addTodo}/>
            <div>
                <ToDo/>
            </div>
            <NavBar/>
        </div>
  )
}

export default ToDoList
