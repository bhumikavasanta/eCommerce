import React, { useState } from 'react';
import './styles.css';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const AddToCart = ({product}) => {

    const { addToCart } = useCartContext();

    const { id } = product;
    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        setAmount(amount+1);
    };
    const setDecrease = () => {
        amount > 1 ? setAmount(amount-1) : setAmount(1);
    };

  return (
    <section>
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <NavLink to="/cart">
        <button onClick={() => addToCart(id, amount, product)}>
            Add to Cart
        </button>
      </NavLink>
    </section>
  )
}

export default AddToCart
