import styles from '../../styles/Board.module.css'

const headerRows = {
  DOCUMENTO: 'Documento',
  REFERENCIA: 'Referencia',
  ACTIVACION: 'Activación',
  FECHA: 'Fecha',
  VENCIMIENTO: 'Vencimiento',
  MONTO: 'Monto',
  PDF: 'PDF',
  LINK_MERCADOPAGO: 'Link de pago'
}

export default function Board ({ data, title }) {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('yep')
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        {Object.values(headerRows).map((row, i) => (
          <div className={styles.headerRows} key={i}>
            <p className={styles.headerTitles} onClick={handleClick}>
              {row}
            </p>
          </div>
        ))}
      </header>

      {data.map((document, i) => (
        <div key={i} className={styles.div}>
          <input
            disabled
            className={styles.dataInput}
            value={document.CLASE_DOC_TEXTO}
          />
          <input
            disabled
            className={styles.dataInput}
            value={document.REFERENCIA}
          />
          <input
            disabled
            className={styles.dataInput}
            value={document.NRO_ACTIVACION}
          />
          <input
            disabled
            className={styles.dataInput}
            value={document.FECHA}
          />
          <input
            disabled
            className={styles.dataInput}
            value={document.FECHA_VENCIMIENTO}
          />
          <input
            disabled
            className={styles.dataInput}
            value={document.MONTO}
          />

          {document.LINK_DOC === ''
            ? <a className={styles.smallLink} />
            : <a
                className={styles.smallLink}
                href={document.LINK_DOC}
                target='_blank'
                rel='noreferrer'
              >
                <img src='/pdf-download.webp' />
              </a>
          }

          {document.LINK_MERCADOPAGO === ''
            ? <a className={styles.link} />
            : <a
                className={styles.link}
                href={document.LINK_MERCADOPAGO}
                target='_blank'
                rel='noreferrer'
              >
                <img src='/mercadopago.png' />
              </a>
          }

        </div>
      ))}

    </section>
  )
}
