import { ComponentProps } from 'react'
import styles from './styles.module.scss'

interface InputProps extends ComponentProps<'input'> {

}

export const Input = ({...props}: InputProps) => {
  
  return (
    <div className={styles.inputWrapper}>
      <input {...props} />
    </div>
  )
}


