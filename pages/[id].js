import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Spinner from '../components/Spinner'
import Board from '../components/Board'
import NoData from '../components/NoData'
import { ENTRY_TYPES } from '../types/entries'

export default function Home ({ data }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Cesar UI</title>
          <link rel="icon" href="/my-icon.ico" />
        </Head>
        <Navbar />
        <Spinner />
      </>
    )
  }

  const [entryType, setEntryType] = useState(ENTRY_TYPES.open)
  const [currentData, setCurrentData] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    data && setTitle(data.title)
  }, [data])

  useEffect(() => {
    entryType === ENTRY_TYPES.open &&
    setCurrentData(data.openEntries)

    entryType === ENTRY_TYPES.all &&
    setCurrentData(data.allEntries)
  }, [data, entryType])

  return (
    <>
      <Head>
        <title>Cesar UI</title>
        <link rel="icon" href="/my-icon.ico" />
      </Head>
      <Navbar />
      <Banner
        entryType={entryType}
        setEntryType={setEntryType}
      />
      <h2 className={styles.title}>
        {title}
      </h2>
        {!data &&
          <Spinner />
        }
        {currentData.length > 0 &&
          <Board
            data={currentData}
          />
        }
        {
          !currentData.length &&
          <NoData />
        }
    </>
  )
}

const ids = [
  'KmeNH1iRWiB7m3Wu',
  'p3iU3MDq4oWNbc94',
  'f7sHyEXz5MVvXgkL'
]

export async function getStaticPaths () {
  const paths = ids.map(id => ({
    params: { id }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps ({ params }) {
  const { id } = params
  const defaultURL = process.env.NEXT_PUBLIC_DEFAULT_URL

  const res = await fetch(defaultURL + id)
  const data = await res.json()

  return {
    props: { data }
  }
}
