/* eslint-disable react/prop-types */
import styles from './Time.module.css'

function Time (props) {
    return (
        <section className={styles.time} style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <p>{props.cargo}</p>
            <img src={props.image} alt="" />
            <p>{props.time}</p>
        </section>
    )
}

export default Time
