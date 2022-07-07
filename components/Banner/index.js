import styles from '../../styles/Banner.module.css'
import { useState } from 'react'
import { ENTRY_TYPES } from '../../types/entries'

const ACTIVE_BUTTON = {
  openEntries: 0,
  allEntries: 1
}

export default function Banner ({ entryType, setEntryType }) {
  const [activeButton, setActiveButton] = useState(ACTIVE_BUTTON.openEntries)

  const handleClick = () => {
    entryType === ENTRY_TYPES.open &&
    setAllEntries()

    entryType === ENTRY_TYPES.all &&
    setOpenEntries()
  }

  const setAllEntries = () => {
    setEntryType(ENTRY_TYPES.all)
    setActiveButton(ACTIVE_BUTTON.allEntries)
  }

  const setOpenEntries = () => {
    setEntryType(ENTRY_TYPES.open)
    setActiveButton(ACTIVE_BUTTON.openEntries)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.div}>
        <button
          onClick={handleClick}
          className={
            activeButton === ACTIVE_BUTTON.openEntries
              ? styles.activeButton
              : styles.inactiveButton
          }
        >
          Partidas abiertas
        </button>
        <button
          onClick={handleClick}
          className={
            activeButton === ACTIVE_BUTTON.allEntries
              ? styles.activeButton
              : styles.inactiveButton
          }
        >
          Todas las partidas
        </button>
      </div>
    </div>
  )
}
