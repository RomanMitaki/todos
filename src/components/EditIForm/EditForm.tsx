import React, { type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction, useEffect, useRef, useState } from 'react'
import { classNames } from '../../assets/classNames/classNames'
import classes from './EditForm.module.css'
import { type IToDo } from '../../types/types'

interface EditFormProps {
  className?: string
  todo: IToDo
  onSubmit: (newTodo: IToDo) => void
  isEdit: Dispatch<SetStateAction<boolean>>
}

const EditForm = (props: EditFormProps) => {
  const { todo, onSubmit, isEdit } = props
  const [input, setInput] = useState<string>(todo.text)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ ...todo, text: input })
    isEdit((prev) => !prev)
    setInput('')
  }

  return (
      <form data-testid='EditForm' onSubmit={handleSubmit} className={classNames(classes.editForm)}>
          <input onChange={handleChange}
                 ref={inputRef}
                 value={input}
                 name='text'
                 className={classNames(classes.formInput)}
                 data-testid='EditForm__input'
          />
      </form>
  )
}

export default EditForm
