export default function Document ({ document }) {
  return (
    <main>
      {Object.entries(document).map(([key, value]) => (
        <section key={key}>
          <p>{value}</p>
        </section>
      ))}
    </main>
  )
}
