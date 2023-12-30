import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const PageNavigation = (props) => {

    const { title } = props;

  return (
    <section className='pageNav'>
      <NavLink to='/'>
        Home
      </NavLink>
      &nbsp;
      /
      &nbsp;
      {title}
    </section>
  )
}

export default PageNavigation
