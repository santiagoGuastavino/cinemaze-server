import styles from '../../styles/SearchBar.module.css'
import { useRef, useState, useEffect } from 'react'
import getRequest from '../../helper/apiCall'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

const SEARCH_STATUS = {
  EMPTY: 0,
  TYPING: 1,
  LOADING: 2
}

const INPUT_INITIAL = ''

export default function SearchBar ({ data, setData }) {
  const [searchStatus, setSearchStatus] = useState(SEARCH_STATUS.EMPTY)
  const [inputValue, setInputValue] = useState(INPUT_INITIAL)

  const input = useRef()

  // this submits and changes state to loading
  // loading state should show a little spinner and disable input
  const handleSubmit = (e) => {
    e.preventDefault()
    getRequest('/api/data', setData)
    setSearchStatus(SEARCH_STATUS.LOADING)
  }

  // this waits for key pressed to be enter and passes to handlesubmit
  const handleKeyDown = (e) => {
    const { key } = e
    key === 'Enter' && handleSubmit(e)
  }

  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  // this just focuses the input when click on the box
  const handleClick = (e) => {
    e.preventDefault()
    input.current.focus()
  }

  const clearInput = () => {
    setInputValue(INPUT_INITIAL)
  }

  const isEmpty = searchStatus === SEARCH_STATUS.EMPTY
  const isTyping = searchStatus === SEARCH_STATUS.TYPING
  const isSearching = searchStatus === SEARCH_STATUS.LOADING

  useEffect(() => {
    input.current.focus()
  }, [])

  // this listens to typing in input and sets empty or typing
  useEffect(() => {
    if (inputValue === '') {
      setSearchStatus(SEARCH_STATUS.EMPTY)
    } else {
      setSearchStatus(SEARCH_STATUS.TYPING)
    }
  }, [inputValue])

  // this waits for data to be set and restores the input
  useEffect(() => {
    data && setInputValue(INPUT_INITIAL)
  }, [data])

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className={styles.form}
    >
      <div className={styles.div} onClick={handleClick}>
        {isEmpty &&
          <FontAwesomeIcon className={styles.magniGlass} icon={faMagnifyingGlass} />
        }
        {isTyping &&
          <FontAwesomeIcon className={styles.xMark} icon={faXmark} onClick={clearInput} />
        }
        {isSearching &&
          <div className={styles.spinner}>
            <img src='/spinner.gif' />
          </div>
        }
        <p>
          <input
            ref={input}
            placeholder='Busque algo...'
            value={inputValue}
            onChange={handleChange}
            disabled={isSearching}
          />
        </p>
      </div>
    </form>
  )
}
