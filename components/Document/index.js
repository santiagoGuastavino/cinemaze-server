import styles from '../../styles/Document.module.css'

export default function Document ({ document }) {
  return (
    <main className={styles.main}>
      {Object.entries(document).map(([key, value]) => (
        <section className={styles.section} key={key}>
          <p>{value}</p>
        </section>
      ))}
    </main>
  )
}
