import styles from "./Card.module.css"
import edit from "./edit.png"
import trash from "./trash.png"

const Card = (props) => {

  const {link_imagen, titulo} = props.data

  return (
    <div className={styles.cards}>
        <img src={link_imagen} alt={titulo} className={styles.img}/>
        <footer className={styles.pie}>
          <div className={styles.pieIcon}>
            <img src={trash} alt="Icono Eliminar" />
            <span>BORRAR</span>
          </div>
          <div className={styles.pieIcon}>
            <img src={edit} alt="Icono Editar" />
            <span>EDITAR</span>
          </div>
        </footer>
    </div>
  )
}

export default Card
