import react, { useState, useEffect } from 'react'

const AuthContext = react.createContext({
  isLoggedIn: false,
  //melhor para o auto complete nas chamadas do context
  onLogout: () => {},
  onLogin: (email, password) => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    localStorage.setItem('isSubmitLogin', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isSubmitLogin')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('isSubmitLogin')

    if (storedUser === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext
