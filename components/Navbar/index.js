import styles from '../../styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.barBox}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.logoBox}>
          <img src='/logo-jobint.png' />
        </div>
      </nav>
    </div>
  )
}
