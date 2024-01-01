import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './styles.css';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className='empty-cart'>
        <h3>No Cart in Item </h3>
      </div>
    );
  }
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
        <hr />
        <div className="cart-two-button">
          <NavLink to='/products'>
            <button>Continue Shopping</button>
          </NavLink>
          <button className='btn btn-clear' onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart