import React, { useState } from 'react'
import classes from './Checkbox.module.css'
import { classNames } from '../../assets/classNames/classNames'
import CheckIcon from '../../images/check.svg'

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
        <label>
            <input
                className={classNames(classes.checkbox)}
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked((prev) => !prev)
                }}
            />
            <span className={classNames(classes.checkbox__custom)}>
                {isChecked ? <CheckIcon/> : null}
            </span>
        </label>
  )
}

export default Checkbox
