import React, { useState } from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface ToDoProps {
  className?: string
  text?: string
  delete: (id: string) => void
  id: string
}

const ToDo = (props: ToDoProps) => {
  const [isChecked, setIsChecked] = useState(false)
  console.log(isChecked)
  return (
        <div className={classNames(classes.wrapper)}>
            <Checkbox setIsChecked={setIsChecked} isChecked={isChecked}/>
            <p className={classNames(classes.text, { [`${classes.text__checked}`]: isChecked })}>{props.text}</p>
            <div className={classes.btn__wrapper}>
                <Button>
                    <FiEdit2 size={'24px'} />
                </Button>
                <Button onClick={() => { props.delete(props.id) }}>
                    <RiDeleteBin6Line size={'24px'} />
                </Button>
            </div>
        </div>
  )
}

export default ToDo
