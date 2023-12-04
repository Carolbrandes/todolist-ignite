import styles from './styles.module.scss'

export const Input = () => {
  return (
    <div className={styles.inputWrapper}>
      <input placeholder='Adicione uma nova tarefa' type="text" />
    </div>
  )
}


