/* eslint-disable react/prop-types */
import styles from './Button.module.css'

function Button (props) {
    return (
        <button className={styles.btn} type="submit">{props.children}</button>
    )
}

export default Button
