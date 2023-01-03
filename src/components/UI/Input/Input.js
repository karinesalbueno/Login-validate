import React, { useRef, useEffect } from 'react'

import classes from './Input.module.css'

const Input = (props) => {
  const inputRef = useRef()

  //focar no input de email quando ele não é vazio após onClick
  //useEffect por ser só depois de sr renderizado
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default Input
