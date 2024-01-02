import React from 'react';
import './styles.css';
import CartAmountToggle from '../SingleProduct/CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/CartContext';

const CartItem = (props) => {

    const { id, name, image, price, amount } = props;
    const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <div className='cart_heading grid grid-five-column'>
      <div className="cart-image--name">
        <div>
            <figure>
                <img src={image} alt="Product" />
            </figure>
        </div>
        <div>
            <p>
                {name}
            </p>     
        </div>
        <div className='cart-hide'>
            <p>
                ${price}
            </p>
        </div>
        <CartAmountToggle
            amount = {amount}
            setIncrease = {() => setIncrease(id)}
            setDecrease = {() => setDecrease(id)}
        />
        <div className="cart-hide">
            <p>
                {price + amount}
            </p>
        </div>
        <div>
            <FaTrash className='remove-icon' onClick={() => removeItem(id)} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
