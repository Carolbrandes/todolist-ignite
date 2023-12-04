import React from 'react'
import styles from './styles.module.scss'

export const TodosCounters = () => {
  return (
    <section className={styles.CountersWrapper}>
        <div className={styles.createTodos}>
        Tarefas criadas <span>0</span>
        </div>

        <div className={styles.concludedTodos}>
        Concluídas <span>0</span>
        </div>
      
    </section>
  )
}


