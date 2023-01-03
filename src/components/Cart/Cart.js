import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'gel', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total quantidade</span>
        <span>35.60</span>
      </div>

      <div className={classes.actions}>
        {/* usando esta sintaxe de className pq contém traço */}
        <button className={classes['button--alt']}>Fechar</button>
        <button className={classes.button}>Ordenar</button>
      </div>
    </div>
  )
}

export default Cart
