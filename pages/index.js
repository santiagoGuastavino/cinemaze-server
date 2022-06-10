// import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default function Home () {
  return (
    <>
      <Head>
        <title>Cesar UI</title>
        <link rel="icon" href="/my-icon.ico" />
      </Head>

      <Navbar />
      <Banner />
      <div style={{ height: '3000px' }}></div>
    </>
  )
}
