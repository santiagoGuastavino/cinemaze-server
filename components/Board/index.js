import styles from '../../styles/Board.module.css'

const headerRows = {
  DOCUMENTO: 'Documento',
  REFERENCIA: 'Referencia',
  ACTIVACION: 'Activación',
  FECHA: 'Fecha',
  VENCIMIENTO: 'Vencimiento',
  MONTO: 'Monto',
  PAGO: 'Pago',
  PDF: 'PDF'
}

export default function Board ({ data }) {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('yep')
  }

  return (
    <section className={styles.section}>

      <h2 className={styles.title}>
        {data.title}
      </h2>

      <header className={styles.header}>
        {Object.values(headerRows).map((row, i) => (
          <div key={i}>
            <p onClick={handleClick}>
              {row}
            </p>
          </div>
        ))}
      </header>

      {data.map((document, i) => (
        <div key={i} className={styles.div}>
          <input disabled value={document.CLASE_DOC_TEXTO} />
          <input disabled value={document.REFERENCIA} />
          <input disabled value={document.NRO_ACTIVACION} />
          <input disabled value={document.FECHA} />
          <input disabled value={document.FECHA_VENCIMIENTO} />
          <input disabled value={document.MONTO} />
          <input disabled value={document.VIA_PAGO_TEXTO} />

          {document.LINK_DOC === ''
            ? <a className={styles.link} />
            : <a
                className={styles.link}
                href={document.LINK_DOC}
                target='_blank'
                rel='noreferrer'
              >
                <img src='/pdf-download.webp' />
              </a>
          }

        </div>
      ))}

    </section>
  )
}
