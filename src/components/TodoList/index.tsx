import React from 'react'
import { TodoItem } from './TodoItem'
import { useTodo } from '../../hooks/useTodo'

export const TodoList = () => {
  const {todoList} = useTodo()
  return (
    <div>
      {
        todoList?.map(todo => <TodoItem key={todo.id} todo={todo} />)
      }
      
    </div>
  )
}

