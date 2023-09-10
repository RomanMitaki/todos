import React from 'react'
import classes from './ToDoForm.module.css'
import { Button } from '../Button/Button'
import { classNames } from '../../assets/classNames/classNames'

const ToDoForm = () => {
  return (
        <form className={classNames(classes.toDoForm)}>
                <input
                    className={classes.formInput}
                    placeholder={'What needs to be done?'}
                />
                <Button className={classes.formButton}>Add</Button>
        </form>
  )
}

export default ToDoForm
