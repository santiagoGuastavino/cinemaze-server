import styles from '../../styles/Navbar.module.css'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  const input = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    input.current.focus()
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.barBox}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.logoBox}>
          <img src='/logo-jobint.png' />
        </div>
        <div className={styles.inputBox}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p onClick={handleClick}>
            <input ref={input} placeholder='Busque algo...' />
          </p>
        </div>
      </nav>
    </div>
  )
}
