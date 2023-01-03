import React, { useContext } from 'react'

import Navigation from './Navigation'
import classes from './MainHeader.module.css'
import AuthContext from '../../services/AuthContext'

const MainHeader = (props) => {
  const context = useContext(AuthContext)

  return (
    <>
      <header className={classes['main-header']}>
        <h1>cosmetics</h1>
        <Navigation onLogout={context.onLogout} onShowModal={props.onShowModal} />
      </header>
      <img src={'/make2.jpg'} alt={'modelo'} />
    </>
  )
}

export default MainHeader
