import { classNames } from '../../assets/classNames/classNames'
import classes from './Button.module.css'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className = '',
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props
  return (
        <button
            className={classNames(classes.button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
  )
}
