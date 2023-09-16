import React from 'react'
import classes from './Checkbox.module.css'
import { classNames } from '../../assets/classNames/classNames'
import CheckIcon from '../../images/check.svg'

interface CheckboxProps {
  className?: string
  handleChecked: () => void
  isChecked: boolean
}
const Checkbox = (props: CheckboxProps) => {
  const { handleChecked, isChecked } = props

  return (
        <label>
            <input
                className={classNames(classes.checkbox)}
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
            />
            <span className={classNames(classes.checkbox__custom)}>
               {isChecked ? <CheckIcon/> : null}
            </span>
        </label>
  )
}

export default Checkbox
