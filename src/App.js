import React, { useContext } from 'react'

import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './services/AuthContext'

import Login from './components/Login/Login'
import Products from './components/Products/Products';

function App() {
  const context = useContext(AuthContext)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Products />}
      </main>
    </React.Fragment>
  )
}

export default App
