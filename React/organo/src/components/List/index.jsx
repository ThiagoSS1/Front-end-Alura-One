/* eslint-disable react/prop-types */
import styles from './List.module.css';

function List(props) {
  return (
    <div className={styles.list}>
      <label htmlFor="">{props.label}</label>
      <select required={props.required} onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor}>
        <option value=""></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default List;