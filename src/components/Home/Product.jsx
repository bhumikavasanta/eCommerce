import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css';

const Product = (props) => {

    const { id, title, image, price, category } = props;

  return (
    <div>
      <NavLink to={`/singleProduct/${id}`}>
        <div className='card'>
            <figure>
                <img src={image} alt={title} />
                <figcaption className='caption'>
                    {category}
                </figcaption>
                <div className="card-data">
                    <div className="card-data-flex">
                        <p className="card-data--price">
                            $ {price}
                        </p>
                    </div>
                </div>
            </figure>
        </div>
      </NavLink>
    </div>
  )
}

export default Product
