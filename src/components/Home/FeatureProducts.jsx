import React from 'react';
import { useProductContext } from '../../context/ProductContext';
import Product from './Product';
import './styles.css';

const FeatureProducts = () => {

    const { isLoading, featureProducts } = useProductContext();

  return (
    <>
        {
            isLoading ? (
                <div>
                    Loading...
                </div>
            ) : (
                <section className="feature-products">
                    {/* <div> */}
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-equal-four-column">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      {/* </div> */}
                </section>
            )
        }
    </>
  )
}

export default FeatureProducts
