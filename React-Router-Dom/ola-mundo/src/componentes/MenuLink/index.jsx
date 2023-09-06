/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink ({ children, to }) {

  return (
    <>
      <div className={styles.MenuLink}>
        <NavLink
          className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
          to={to}
          end
        >
          {children}
        </NavLink>
      </div>
    </>
  )
}