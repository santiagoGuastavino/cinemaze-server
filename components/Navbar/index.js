import styles from '../../styles/Navbar.module.css'
import Image from 'next/image'
import logo from '../../public/logo-jobint.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul>
          <div className={styles.iconBox}>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </div>
          <div className={styles.logoBox}>
            <li>
              <Image src={logo} />
            </li>
          </div>
          <div className={styles.inputBox}>
            <li>
              <input />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}
