import React, { type ChangeEvent, type Dispatch, type SetStateAction, useState } from 'react'
import classes from './Checkbox.module.css'
import { classNames } from '../../assets/classNames/classNames'
import CheckIcon from '../../images/check.svg'

interface CheckboxProps {
  className?: string
  setIsChecked: Dispatch<SetStateAction<boolean>>
  isChecked: boolean
}
const Checkbox = (props: CheckboxProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setIsChecked(event.target.checked)
  }

  return (
        <label>
            <input
                className={classNames(classes.checkbox)}
                type="checkbox"
                checked={props.isChecked}
                onChange={handleChange}
            />
            <span className={classNames(classes.checkbox__custom)}>
               {props.isChecked ? <CheckIcon/> : null}
            </span>
        </label>
  )
}

export default Checkbox
