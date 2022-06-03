import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Wrapper from '../components/Wrapper'

export default function Home () {
  return (
    <>
      <Head>
        <title>Cesar UI</title>
        <meta name="description" content="Cesar UI" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Navbar />

      <Banner />

      <Wrapper grey>
        <section className={styles.section}>

        </section>
      </Wrapper>

      <Wrapper white>
        <section className={styles.section}>

        </section>
      </Wrapper>
    </>
  )
}
