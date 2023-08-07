/* eslint-disable react/prop-types */
import styles from './Time.module.css'

function Time (props) {
    return (
        <section className={styles.time}>
            <h3>{props.nome}</h3>
            <p>{props.cargo}</p>
            <img src={props.image} alt="" />
            <p>{props.time}</p>
        </section>
    )
}

export default Time
