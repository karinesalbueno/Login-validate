import React from 'react'

import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div
      className={`${classes.control} ${
        props.input.isvalid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  )
}

export default Input
