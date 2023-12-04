import React, { ButtonHTMLAttributes,  ReactNode } from 'react'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    
}


export const Button = ({children, ...rest}: ButtonProps) => {
  return (
    <button className={styles.ButtonWrapper} {...rest}>
      {children} 
    </button>
  )
}


