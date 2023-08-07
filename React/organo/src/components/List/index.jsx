/* eslint-disable react/prop-types */
import styles from './List.module.css';

function List(props) {
  return (
    <div className={styles.list}>
      <label htmlFor="">{props.label}</label>
      <select required={props.required} onChange={evento => props.aoAlterado(evento.target.value)} value={props.value}>
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default List;