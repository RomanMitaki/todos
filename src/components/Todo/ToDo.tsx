import React, { type Dispatch, type SetStateAction, useRef, useState } from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import EditForm from '../EditIForm/EditForm'
import useOnClickOutside from '../../assets/hooks/useOnClickOutside'
import { type IToDo, type IToDos } from '../../types/types'

interface ToDoProps {
  className?: string
  todo: IToDo
  deleteTodo: (id: string) => void
  updateTodo: (newTodo: IToDo) => void
  todos: IToDos
  setTodos: Dispatch<SetStateAction<IToDos>>
}

const ToDo = (props: ToDoProps) => {
  const { deleteTodo, todo, updateTodo } = props
  const { id, text, isCompleted } = todo
  const [isEditable, setIsEditable] = useState(false)
  const wrapperRef = useRef(null)

  useOnClickOutside(wrapperRef, () => { setIsEditable(false) })
  const handleEdit = () => {
    setIsEditable((prev) => !prev)
  }

  const handleChecked = () => {
    updateTodo({ ...todo, isCompleted: !isCompleted })
  }

  return (
        <div data-testid='ToDo' className={classNames(classes.wrapper)} ref={wrapperRef}>
            <Checkbox isChecked={isCompleted} handleChecked={handleChecked} />
            {isEditable
              ? (<EditForm onSubmit={updateTodo} todo={todo} isEdit={setIsEditable}/>)
              : (
                <p data-testid='ToDo__text' className={classNames(classes.text, { [`${classes.text__checked}`]: isCompleted })}>{text}</p>)}
            <div className={classes.btn__wrapper}>
                <Button data-testid='ToDo__editBtn' onClick={handleEdit}>
                    <FiEdit2 size={'24px'} />
                </Button>
                <Button data-testid='ToDo__deleteBtn' onClick={() => { deleteTodo(id) }}>
                    <RiDeleteBin6Line size={'24px'} />
                </Button>
            </div>
        </div>
  )
}

export default ToDo
