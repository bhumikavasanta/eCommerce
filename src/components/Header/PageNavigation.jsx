import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const PageNavigation = (props) => {

    const { title } = props;

  return (
    <section>
      <NavLink to='/'>
        Home
      </NavLink>
      /
      {title}
    </section>
  )
}

export default PageNavigation
