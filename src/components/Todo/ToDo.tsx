import React from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'

const ToDo = () => {
  return (
        <div className={classNames(classes.wrapper)}>
            <Checkbox/>
            <p>dhgvo</p>
            <div>
                <Button>1</Button>
                <Button>2</Button>
            </div>
        </div>
  )
}

export default ToDo
