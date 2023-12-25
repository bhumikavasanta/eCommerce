import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Navbar from './Navbar';
import './styles.css';

const Header = () => {
  return (
    <header>
        <NavLink to="/">
            <img src={Logo} alt="Logo" className="logo" />
        </NavLink>
        <Navbar />
    </header>
  )
}

export default Header