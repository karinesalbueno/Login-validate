import ProductItemForm from './ProductItemForm'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  // 2 casas decimais
  const price = `$${props.product.price.toFixed(2)}`

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.product.name}</h3>
        <div className={classes.description}>{props.product.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <ProductItemForm />
      </div>
    </li>
  )
}

export default ProductItem
