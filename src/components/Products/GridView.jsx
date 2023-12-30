import React, { useEffect } from 'react';
import './styles.css';
import Product from '../Home/Product';

const GridView = ({products}) => {
    useEffect(() => {
        // console.log(products);
      }, []);
  return (
    <section className='grid-view'>
      <div className="container grid grid-three-column">
        {
            products.map((currentElement, id) => {
                return <Product key={currentElement.id} {...currentElement} />
            })
        }
      </div>
    </section>
  )
}

export default GridView
