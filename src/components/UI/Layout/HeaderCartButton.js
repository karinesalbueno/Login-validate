import { useContext } from 'react'

import CartContext from '../../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
  const cartContext = useContext(CartContext)

  const numberOfCartItems = cartContext.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)

  return (
    <button className={classes.button}>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
