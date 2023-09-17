import React, { useEffect, useMemo, useState } from 'react'
import classes from './ToDoList.module.css'
import { classNames } from '../../assets/classNames/classNames'
import NavBar from '../NavBar/NavBar'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../Todo/ToDo'
import { type IToDo, type IToDos } from '../../types/types'

const ToDoList = () => {
  const [todos, setTodos] = useState<IToDos>([])
  const [renderedTodos, setRenderedTodos] = useState<IToDos>([])
  const [isCompletedTodos, setIsCompletedTodos] = useState(false)
  const [isActiveTodos, setIsActiveTodos] = useState(false)
  const addTodo = (todo: IToDo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const completedTodos: IToDos = useMemo(
    () => {
      return todos.filter(todo => todo.isCompleted)
    }, [todos]
  )

  const activeTodos: IToDos = useMemo(
    () => {
      return todos.filter(todo => !todo.isCompleted)
    }, [todos]
  )

  useEffect(() => {
    isCompletedTodos
      ? setRenderedTodos(completedTodos)
      : isActiveTodos
        ? setRenderedTodos(activeTodos)
        : setRenderedTodos(todos)
  }, [todos, activeTodos, completedTodos, isCompletedTodos, isActiveTodos])

  const renderedQtyTodos = useMemo(
    () => {
      return renderedTodos !== undefined
        ? renderedTodos.length
        : 0
    }, [renderedTodos]
  )

  const updateTodo = (newTodo: IToDo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return
    }
    setTodos((todos) => todos.map((todo) => (todo.id === newTodo.id ? newTodo : todo)))
  }

  const deleteTodo = (id: string) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const clearCompleteTodos = () => {
    const newTodos = todos.filter(todo => !todo.isCompleted)
    setTodos(newTodos)
  }

  return (
        <div className={classNames(classes.page, {}, [])}>
            <h1>todos</h1>
            <ToDoForm onSubmit={addTodo}/>
            <div className={classNames(classes.todos__wrapper)}>
                {todos.length
                  ? renderedTodos.map((todo, index) => (
                        <ToDo todo={todo}
                              todos={todos}
                              setTodos={setTodos}
                              deleteTodo={deleteTodo}
                              updateTodo={updateTodo}
                              key={index}
                        />
                  ))
                  : <p>It is time to start planning!</p>}
            </div>
            <NavBar isCompleted={setIsCompletedTodos}
                    isActive={setIsActiveTodos}
                    todos={todos}
                    renderedQtyTodos={renderedQtyTodos}
                    setTodos={setTodos}
                    clearCompletedTodos={clearCompleteTodos}

            />
        </div>
  )
}

export default ToDoList
