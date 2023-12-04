import React from "react";
import clipboardIcon from "../../assets/Clipboard.svg";
import styles from "./styles.module.scss";

export const EmptyTodo = () => {
  return (
    <div className={styles.emptyTodoWrapper}>
      <img src={clipboardIcon} alt="icone de prancheta" />

      <h4>Você ainda não tem tarefas cadastradas</h4>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
