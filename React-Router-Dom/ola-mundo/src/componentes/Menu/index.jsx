/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import MenuLink from '../MenuLink'
import styles from './Menu.module.css'
import { useLocation } from 'react-router-dom'

export default function Menu () {

  const localizacao = useLocation()
  console.log(localizacao)

  return (
    <>
      <header >
        <nav className={styles.navegacao}>
          <MenuLink to="/">
            Inicio
          </MenuLink>
          <MenuLink to="/sobre">
            Sobre Mim
          </MenuLink >
        </nav>
      </header>
    </>
  )
}