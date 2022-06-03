import styles from '../../styles/Banner.module.css'

export default function Banner () {
  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <p>Partidas abiertas</p>
        <p>Todas las partidas</p>
      </div>
    </div>
  )
}
