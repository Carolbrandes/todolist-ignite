
import { Button } from '../Button'
import { Input } from '../Input'
import AddIconButton from "../../assets/plus.svg"
import styles from './styles.module.scss' 
import { useTodo } from '../../hooks/useTodo'
import { ChangeEvent, useState } from 'react'

export const CreateNewTask = () => {
  const {addNewTodo} = useTodo()
  const [task, setTask] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)

  const handleClick = () =>  {
    if(task.length == 0){
      alert('Preencha a descrição da tarefa!')
      return
    }

    addNewTodo({task})
    setTask('')
  }
  

  return (
    <section className={styles.newTaskWrapper}>
      <Input value={task} onChange={handleChange} placeholder='Adicione uma nova tarefa' />
      <Button onClick={handleClick} style={{background: '#1E6F9F'}}>
        <span>Criar</span>  <img src={AddIconButton} alt="adicionar tarefa" />
      </Button>
    </section>
  )
}


