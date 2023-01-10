import { useContext } from 'react'

import ProductItemForm from './ProductItemForm'
import classes from './ProductItem.module.css'
import CartContext from '../../../store/cart-context'

const ProductItem = (props) => {
  const cartContext = useContext(CartContext)

  // 2 casas decimais
  const price = `$${props.product.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.product.name}</h3>
        <div className={classes.description}>{props.product.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default ProductItem
