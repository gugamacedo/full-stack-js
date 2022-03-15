import style from './Header.module.css'

const Header = () => (
  <header className={style.header}>
    <h1>Boas-vindas</h1>
    <button className={style.btn}>Botão</button>
  </header>
)

export default Header