import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'

const rows = [
  'Documento',
  'Nº de documento',
  'Nº de activación',
  'Fecha',
  'Vencimiento',
  'Monto',
  'Factura',
  'Pago'
]

export default function Home () {
  const [data, setData] = useState(null)

  return (
    <>
      <Head>
        <title>Cesar UI</title>
        <link rel="icon" href="/my-icon.ico" />
      </Head>

      <Navbar />
      <Banner />

      <SearchBar
        data={data}
        setData={setData}
      />

      <section className={styles.section}>
        <header className={styles.header}>
          {rows.map((row, i) => (
            <p key={i}>{row}</p>
          ))}
        </header>
          {data && data.map((document, i) => (
            <div key={i} className={styles.div}>
              <p>{document.CLASE_DOC_TEXTO}</p>
              <p>{document.DOCUMENTO}</p>
              <p>{document.NRO_ACTIVACION}</p>
              <p>{document.FECHA_DOC}</p>
              <p>{document.VENC_NETO}</p>
              <p>{document.MONEDA}&nbsp;${document.IMPORTE_ML}</p>
              <p>{document.NOMBRE}</p>
              <p>{document.VIA_PAGO_TEXTO}</p>
            </div>
          ))}
      </section>
    </>
  )
}
