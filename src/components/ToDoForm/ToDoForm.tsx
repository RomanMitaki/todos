import React, { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react'
import classes from './ToDoForm.module.css'
import { Button } from '../Button/Button'
import { classNames } from '../../assets/classNames/classNames'
import { type IToDo } from '../../types/types'
import { v4 as uuidv4 } from 'uuid'

interface ToDoFormProps {
  className?: string
  onSubmit: (todo: IToDo) => void
}
const ToDoForm = ({ onSubmit }: ToDoFormProps) => {
  const [input, setInput] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)
  // console.log(inputRef)
  useEffect(() => {
    inputRef.current?.focus()
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
      id: uuidv4(),
      text: input,
      isCompleted: false
    })
    setInput('')
  }

  return (
        <form data-testid='ToDoForm' onSubmit={handleSubmit} className={classNames(classes.toDoForm)}>
                <input
                    className={classes.formInput}
                    placeholder={'What needs to be done?'}
                    onChange={handleChange}
                    ref={inputRef}
                    value={input}
                    name='text'
                    data-testid='ToDoForm__input'
                />
          <Button className={classes.formButton} data-testid='ToDoForm__btn'>
            <span className={classNames(classes.formButton__accent)}>Add</span>
          </Button>
        </form>
  )
}

export default ToDoForm
