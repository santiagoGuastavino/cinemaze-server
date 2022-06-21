import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import getRequest from '../helper/apiCall'

const rows = [
  'Documento',
  'Referencia',
  'Activación',
  'Fecha',
  'Vencimiento',
  'Monto',
  'Pago',
  'PDF'
]

export default function Home () {
  const [data, setData] = useState(null)

  useEffect(() => {
    getRequest('/api/data', setData)
  }, [])

  return (
    <>
      <Head>
        <title>Cesar UI</title>
        <link rel="icon" href="/my-icon.ico" />
      </Head>

      <Navbar />
      <Banner />

      {!data &&
        <div className={styles.spinnerBox}>
          <img src={'/spinner.gif'} />
        </div>
      }
      {data &&
        <section className={styles.section}>
        <h2 className={styles.title}>{data[0].NOMBRE}</h2>
        <header className={styles.header}>
          {rows.map((row, i) => (
            <input disabled key={i} value={row} />
          ))}
        </header>
          {data.map((document, i) => (
            <div key={i} className={styles.div}>
              <input disabled value={document.CLASE_DOC_TEXTO} />
              <input disabled value={document.REFERENCIA} />
              <input disabled value={document.NRO_ACTIVACION} />
              <input disabled value={document.FECHA_DOC} />
              <input disabled value={document.VENC_NETO} />
              <input disabled value={document.MONTO} />
              <input disabled value={document.VIA_PAGO_TEXTO} />
              <a
                className={styles.link}
                href={document.LINK_DOC}
                target='_blank'
                rel='noreferrer'
              >
                <img src='/pdf-download.webp' />
              </a>
            </div>
          ))}
      </section>
      }
    </>
  )
}
