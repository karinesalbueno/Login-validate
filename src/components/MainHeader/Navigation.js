import React, { useContext } from 'react'
import AuthContext from '../../services/AuthContext'
import HeaderCartButton from '../UI/Layout/HeaderCartButton'
import classes from './Navigation.module.css'

const Navigation = (props) => {
  const context = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li onClick={props.onShowModal}>
            <HeaderCartButton />
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
