import React, { useState } from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import EditForm from '../EditIForm/EditForm'

interface ToDoProps {
  className?: string
  text: string
  deleteTodo: (id: string) => void
  id: string
  updateTodo: (id: string, text: string) => void
}

const ToDo = (props: ToDoProps) => {
  const { text, deleteTodo, id, updateTodo } = props
  const [isChecked, setIsChecked] = useState(false)
  const [isEditable, setIsEditable] = useState(false)

  const handleEdit = () => {
    setIsEditable((prev) => !prev)
  }
  console.log(isEditable)
  return (
        <div className={classNames(classes.wrapper)}>
            <Checkbox setIsChecked={setIsChecked} isChecked={isChecked}/>
            {isEditable
              ? (<EditForm onSubmit={updateTodo} text={text} id={id} isEdit={setIsEditable}/>)
              : (
                <p className={classNames(classes.text, { [`${classes.text__checked}`]: isChecked })}>{text}</p>)}
            <div className={classes.btn__wrapper}>
                <Button onClick={handleEdit}>
                    <FiEdit2 size={'24px'} />
                </Button>
                <Button onClick={() => { deleteTodo(id) }}>
                    <RiDeleteBin6Line size={'24px'} />
                </Button>
            </div>
        </div>
  )
}

export default ToDo
