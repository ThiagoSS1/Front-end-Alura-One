/* eslint-disable no-unused-vars */
import MarcaRegistrada from '../MarcaRegistrada'
import styles from './Rodape.module.css'

export default function Rodape () {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
    </footer>
  )
}