import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './styles.css';
import CartItem from './CartItem';

const Cart = () => {
  const {cart} = useCartContext();
  return (
    <section className='cart'>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>
            Item
          </p>
          <p className="cart-hide">
            Price
          </p>
          <p>
            Quantity
          </p>
          <p className="cart-hide">
            SubTotal
          </p>
          <p>
            Remove
          </p>
        </div>
        <hr />
        <div className="cart-item">
          {
            cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Cart