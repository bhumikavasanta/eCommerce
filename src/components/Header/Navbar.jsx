import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const [menuIcon, setMenuIcon] = useState(false);
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  return (
    <nav>
      <div className={menuIcon ? "navbar active" : "navbar"} >
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          {
            isAuthenticated && (<div>
              <img src={user.picture} alt={user.name} />
              <p>{user.name}</p>
            </div>)
          }
          {
            isAuthenticated ? ( <li>
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
              </li>) : ( <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>;
          </li>
         )
          }
         
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className='cart-trolley' />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className='mobile-nav-icon' onClick={() => setMenuIcon(true)} />
          <CgClose name="close-outline" className='mobile-nav-icon close-outline' onClick={() => setMenuIcon(false)} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar