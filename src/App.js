import React, { useContext, useState } from 'react'

import AuthContext from './services/AuthContext'
import CartProvider from './store/CartProvider'

import MainHeader from './components/MainHeader/MainHeader'
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
    <CartProvider>
      {modalIsOpen && <Cart onClose={hideModalHandler} />}
      <MainHeader onShowModal={showModalHandler} />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Products />}
      </main>
    </CartProvider>
  )
}

export default App
