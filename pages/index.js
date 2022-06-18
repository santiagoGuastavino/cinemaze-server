import { useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
// import Document from '../components/Document'

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

      <section>
        {/*  */}
      </section>
      {/* {data && data.map((document, i) => (
        <Document key={i} document={document} />
      ))} */}
    </>
  )
}
