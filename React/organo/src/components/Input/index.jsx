/* eslint-disable react/prop-types */

import styles from './input.module.css'

function Input (props) {

    function aoDigitado (evento) {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={styles.campoTexto}>
            <label htmlFor="">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} type="text" name={props.label} id="" />
        </div>
    )
}

export default Input

