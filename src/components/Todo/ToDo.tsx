import React from 'react'
import classes from './ToDo.module.css'
import { classNames } from '../../assets/classNames/classNames'
import Checkbox from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { FiEdit2 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const ToDo = () => {
  return (
        <div className={classNames(classes.wrapper)}>
            <Checkbox/>
            <p className={classNames(classes.text)}>dhgvo</p>
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
