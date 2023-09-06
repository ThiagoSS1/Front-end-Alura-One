import styles from './Rodape.module.css'

function Rodape () {
  return (
    <footer className={styles.rodape}>
      <nav className={styles.nav}>
        <a href="" className={styles.logo1}></a>
        <a href="" className={styles.logo2}></a>
        <a href="" className={styles.logo3}></a>
      </nav>

      <div className={styles.img}>
        <img src="../../../public/assets/logo.png" alt="" />
      </div>

      <div>
        <p className={styles.p}>Desenvolvido pela Alura </p>
      </div>
    </footer>
  )
}

export default Rodape