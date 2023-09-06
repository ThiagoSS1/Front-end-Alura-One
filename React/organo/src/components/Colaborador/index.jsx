/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './Colaborador.module.css'

function Colaborador ({nome, cargo, image, corDeFundo}) {
    return (
        <div className={styles.colaborador}>
            <div className={styles.cabecalho} style={{backgroundColor: corDeFundo}}>
                <img src={image}/>
            </div>
            <div className={styles.rodape}>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
