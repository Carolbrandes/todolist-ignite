import React from 'react'
import DeleteIcon from "../../assets/deleteIcon.svg"
import styles from './styles.module.scss'

export const TodoItem = () => {
  return (
    <div className={styles.TodoItemWrapper}>
      <label htmlFor="task">
        <input type="radio" name="task" id="task" />
        
        <div className={styles.customInputRadio}>
          <span></span>
        </div>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>

      <button title='excluir tarefa'>
        <img src={DeleteIcon} alt="excluir tarefa" />
      </button>
    </div>
  )
}

