import React from "react";
import styles from "./styles.module.scss";
import { useTodo } from "../../hooks/useTodo";

export const TodosCounters = () => {
  const { todoList } = useTodo();

  const total = todoList.length;
  const totalOfConcluded = todoList.filter((todo) => todo.isConcluded).length;

  return (
    <section className={styles.CountersWrapper}>
      <div className={styles.createTodos}>
        Tarefas criadas <span>{total}</span>
      </div>

      <div className={styles.concludedTodos}>
        Concluídas <span>{`${totalOfConcluded} de ${total}`}</span>
      </div>
    </section>
  );
};
