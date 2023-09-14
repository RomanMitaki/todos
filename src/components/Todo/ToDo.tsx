import React from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

interface ToDoProps {
  className?: string
  text?: string
}

const ToDo = ({ text }: ToDoProps) => {
  return (
        <div className={classNames(classes.wrapper)}>
            <Checkbox/>
            <p className={classNames(classes.text)}>{text}</p>
            <div className={classes.btn__wrapper}>
                <Button>
                    <FiEdit2 size={'24px'} />
                </Button>
                <Button>
                    <RiDeleteBin6Line size={'24px'} />
                </Button>
            </div>
        </div>
  )
}

export default ToDo
