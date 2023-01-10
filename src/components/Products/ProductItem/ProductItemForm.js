import { useRef, useState } from 'react'
import Input from '../../UI/Input/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    //este valor sempre será uma string
    const enteredAmount = amountInputRef.current.value
    //convertendo em number
    const enteredAmountNumber = +enteredAmount

    //removendo espaço em branco e verificar se está vazio
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
    }

    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={'qntd' + props.id}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ adicionar</button>
      {!amountIsValid && <p>Por favor entre com uma quantidade entre (1-5)</p>}
    </form>
  )
}
export default ProductItemForm
