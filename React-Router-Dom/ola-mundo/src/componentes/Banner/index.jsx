/* eslint-disable no-unused-vars */
import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá,Mundo!
        </h1>

        <p className={styles.paragrafo}>
          Este é o meu primeiro componente com CSS Modules.
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          alt="Imagem 1"
        />
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do feio"
        />
      </div>

    </div>
  )
}