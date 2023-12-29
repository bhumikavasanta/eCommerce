import React, { useState } from 'react';
import './styles.css';

const Images = (props) => {

    const { image } = props;
    const images = [image, image, image, image];
    const [mainImg, setMainImg] = useState(images[0]);

  return (
    <section className='images'>
      <div className="grid grid-four-column">
        {
            images.map((currentElement, index) => {
                return (
                    // <figure>
                        <img src={currentElement} alt="Product" className='box-image--style' key={index} onClick={() => setMainImg(currentElement)}/>
                    // </figure>
                );
            })
        }
      </div>
      <div className="main-screen">
        <img src={mainImg} alt="Product" className='mainImage'/>
      </div>
    </section>
  )
}

export default Images
