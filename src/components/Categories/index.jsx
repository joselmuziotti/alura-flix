import Card from "../Card";
import styles from "./Categories.module.css"

const Categories = (props) => {

  const { nombre, color } = props.data
  const {videos} = props

  return (
  <>
    <section className={styles.section}>
      <h3 className={styles.cateTitle} style={{ background: `${color}` }}>{nombre}</h3>
    </section>
    <div>
      {
        videos.map((video, index) => <Card 
        data={video} 
        key={index} 
        />)
      }
    </div>
  </>
  )
}

export default Categories
