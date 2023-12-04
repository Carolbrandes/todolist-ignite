
import { Button } from '../Button'
import { Input } from '../Input'
import AddIconButton from "../../assets/plus.svg"
import styles from './styles.module.scss' 

export const CreateNewTask = () => {
  return (
    <section className={styles.newTaskWrapper}>
      <Input />
      <Button style={{background: '#1E6F9F'}}>
        <span>Criar</span>  <img src={AddIconButton} alt="adicionar tarefa" />
      </Button>
    </section>
  )
}


