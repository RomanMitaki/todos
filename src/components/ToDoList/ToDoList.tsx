import React, { useState } from 'react'
import classes from './ToDoList.module.css'
import { classNames } from '../../assets/classNames/classNames'
import NavBar from '../NavBar/NavBar'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../Todo/ToDo'
import { type IToDo, type IToDos } from '../../types/types'

const ToDoList = () => {
  const [todos, setTodos] = useState<IToDos>([])
  const [deleted, setDeleted] = useState<IToDos>([])

  const addTodo = (todo: IToDo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (text: string, id: string) => {
    if (!text || /^\s*$/.test(text)) {
      return
    }
    const updatedTodos = todos.map(el => {
      if (el.id === id) {
        el.text = text
      }
      return el
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id: string) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    const deletedTodos = [...todos].filter(todo => todo.id === id)
    setTodos(newTodos)
    setDeleted(deletedTodos)
  }

  return (
        <div className={classNames(classes.page, {}, [])}>
            <h1>todos</h1>
            <ToDoForm onSubmit={addTodo}/>
            <div className={classNames(classes.todos__wrapper)}>
                {todos.length
                  ? todos.map((todo, index) => (
                        <ToDo id={todo.id}
                              deleteTodo={deleteTodo}
                              updateTodo={updateTodo}
                              text={todo.text}
                              key={index}/>
                  ))
                  : null}
            </div>
            <NavBar/>
        </div>
  )
}

export default ToDoList
