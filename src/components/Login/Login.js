import React, { useState, useReducer, useEffect, useContext } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../services/AuthContext'
import Input from '../UI/Input/Input'

const EmailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: false }
}

const PasswordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [emailIsValid, setEmailIsValid] = useState()
  // trocado por useReducer
  const [formIsValid, setFormIsValid] = useState(false)

  const [emailState, dispatchEmail] = useReducer(EmailReducer, {
    value: '',
    isValid: null,
  })
  const [passwordState, dispatchPassword] = useReducer(PasswordReducer, {
    value: '',
    isValid: null,
  })

  const emailIsValid = emailState
  const passwordIsValid = passwordState

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
  }

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid)
  }, [emailIsValid, passwordIsValid])

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  }

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  }

  const context = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault()
    context.onLogin(emailState.value, passwordState.value)
  }

  const IputEmail = {
    id: 'email',
    label: 'E-mail',
    type: 'email',
    isvalid: emailIsValid,
    value: emailState.value,
    onChange: emailChangeHandler,
    onBlur: validateEmailHandler,
  }
  const IputPassword = {
    id: 'password',
    label: 'Password',
    type: 'password',
    isvalid: passwordState,
    value: passwordState.value,
    onChange: passwordChangeHandler,
    onBlur: validatePasswordHandler,
  }

  return (
    <Card classname={classes.login}>
      <form onSubmit={submitHandler}>
        <Input input={{ ...IputEmail }} />
        <Input input={{ ...IputPassword }} />
        <div className={classes.actions}>
          <Button type="submit" classname={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Login
