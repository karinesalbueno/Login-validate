import { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    //se um id já existir retorne ele 
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id );
    //só funciona se já tiver um item, senao retorna nulo
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    
    if(existingCartItem){
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if( action.type === 'REMOVE_ITEM'){
    const existingCartItemIndex = state.items.findIndex(
      item => item.id === action.id);
        
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item=> item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
  
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }

  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  )

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  }

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider