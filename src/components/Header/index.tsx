import Logo from "../../assets/Logo.svg"
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="todo logo - um foguete e texto todo" />
    </header>
  )
}


