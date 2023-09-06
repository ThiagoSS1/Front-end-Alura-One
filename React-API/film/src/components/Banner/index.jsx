import styles from '@/components/Banner/Banner.module.css'

function Banner ({ imagem }) {
  return (
   <div className={styles.banner} style={{ backgroundImage: `url(${imagem}`}}></div>
  )
}

export default Banner;