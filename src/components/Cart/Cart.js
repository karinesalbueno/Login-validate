import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'gel', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>35.60</span>
      </div>

      <div className={classes.actions}>
        {/* usando esta sintaxe de className pq contém traço */}
        <button className={classes['button--alt']} onClick={props.onClose}>Fechar</button>
        <button className={classes.button}>Finalizar pedido</button>
      </div>
    </Modal>
  )
}

export default Cart
