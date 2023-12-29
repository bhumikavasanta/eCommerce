import React, { useState } from 'react';
import './styles.css';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';

const AddToCart = ({product}) => {

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
        <button>
            Add to Cart
        </button>
      </NavLink>
    </section>
  )
}

export default AddToCart
