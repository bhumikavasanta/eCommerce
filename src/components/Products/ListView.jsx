import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <section className='list-view'>
      <div className="container grid">
        {
            products?.map((currentElement) => {
                const { id, title, image, price, description } = currentElement;
                return <div className="card grid grid-two-column">
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
                    <div className="card-data">
                        <h3>
                            {title}
                        </h3>
                        <p>
                            ${price}
                        </p>
                        <p>
                            {description.slice(0,90)}...
                        </p>
                        <NavLink to={`/singleProduct/${id}`}>
                            <button className='btn'>
                                Read More
                            </button>
                        </NavLink>
                    </div>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default ListView
