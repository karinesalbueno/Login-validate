import React, { useContext, useState } from 'react'

import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './services/AuthContext'

import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'

function App() {
  const context = useContext(AuthContext)
  const [modalIsOpen, setModalIsOen] = useState(false)

  const showModalHandler = () => {
    setModalIsOen(true)
  }
  const hideModalHandler = () => {
    setModalIsOen(false)
  }

  return (
    <React.Fragment>
      {modalIsOpen && <Cart onClose={hideModalHandler} />}
      <MainHeader onShowModal={showModalHandler} />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Products />}
      </main>
    </React.Fragment>
  )
}

export default App
