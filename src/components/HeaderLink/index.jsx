import { Link } from "react-router-dom"
import styles from "./HeaderLink.module.css"


const HeaderLink = ({url, children}) => {
  return (
    <Link to={url}>
      <button className={styles.navBtn}>{children}</button>
    </Link>
  )
}

export default HeaderLink
