import React from "react";
import DeleteIcon from "../../assets/deleteIcon.svg";
import styles from "./styles.module.scss";
import { TodoProps, useTodo } from "../../hooks/useTodo";


interface TodoItemProps {
  todo: TodoProps;
}

export const TodoItem = ({
  todo: { id, task, isConcluded },
}: TodoItemProps) => {
  const { changeStatus, todoList, removeTodo } = useTodo();
  console.log("🚀 ~ file: TodoItem.tsx:14 ~ TodoList:", todoList)

  const handleClickRemove = () => {
    const answerUser = confirm(`Deseja realmente excluir essa tarefa: ${task}?`)

    if(answerUser) removeTodo(id)
  }

  
  return (
    <div className={styles.TodoItemWrapper}>
      <label  htmlFor={id}>
        <input onClick={() => changeStatus(id)} type="radio" name={id} id={id} />

        <div
          className={
            isConcluded
              ? styles.customInputRadioConcluded
              : styles.customInputRadio
          }
        />
        <span className={isConcluded ? styles.labelConcluded : ""}>{task}</span>
      </label>

      <button onClick={handleClickRemove} title="excluir tarefa">
        <img src={DeleteIcon} alt="excluir tarefa" />
      </button>
    </div>
  );
};
