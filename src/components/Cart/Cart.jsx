import React from 'react';
import { useCartContext } from '../context/CartContext';
import './styles.css';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const totalPrice2 = total_price?.toFixed(2);
  const cartTotal = total_price + shipping_fee;
  const cartTotal2 = cartTotal?.toFixed(2);
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
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>
                SubTotal :
              </p>
              <p>
                {totalPrice2}
              </p>
            </div>
            <div>
              <p>
                Shipping Fee :
              </p>
              <p>
                {shipping_fee}
              </p>
            </div>
            <hr />
            <div>
              <p>
                Order Total :
              </p>
              <p>
                {cartTotal2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart