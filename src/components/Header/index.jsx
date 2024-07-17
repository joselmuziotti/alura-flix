import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo.png"
import HeaderLink from "../HeaderLink"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
          <img src={logo} alt="Logo AluraFlix" />
      </Link>
      <nav className="navHeader">
        <HeaderLink url="./">
          HOME
        </HeaderLink>
        <HeaderLink url="./nuevo-video">
          NUEVO VIDEO
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header
